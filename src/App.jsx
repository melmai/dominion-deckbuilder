import React, { Component } from 'react';
import Deckbuilder from './components/Deckbuilder';
import CardLibrary from './components/CardLibrary';
import DeckLibrary from './components/DeckLibrary';
import BoxContainer from './components/BoxContainer';
import ChartContainer from './components/ChartContainer';

class App extends Component {
    constructor(props) {
        super(props);
    
        // set state
        this.state = {
            boxes: [],
            filters: {},
            cards: [],
            cardsBySet: {
                dominion2: [],
                intrigue2: [],
                adventures: [],
                nocturne: [],
            },
            class: {
                type: [],
                count: []
            },
            cost: {
                type: [],
                count: []
            },
            strategy: {
                type: [],
                count: []
            },
            setCards: [],
            filteredCards: [],
            showCardList: false,
            showDeckList: false
        };

        this.filterCardsBySet = this.filterCardsBySet.bind(this);
        this.loadData = this.loadData.bind(this);
        this.toggleBox = this.toggleBox.bind(this);
        this.processCards = this.processCards.bind(this);
        this.sortCardsBySet = this.sortCardsBySet.bind(this);
        this.calcClassData = this.calcClassData.bind(this);
        this.showPage = this.showPage.bind(this);
        this.countInArray = this.countInArray.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        const oldSelection = prevState.boxes;
        const newSelection = this.state.boxes;
        if (oldSelection === newSelection) return;
        if (!newSelection) {
            this.setState({ setCards: this.state.cards });
        } else {
            this.filterCardsBySet();
        }
    }

    // get initial data
    loadData() {
        fetch('/api/cards/')
            .then(response => response.json())
            .then(responseData => {
                this.setState({ cards: responseData, setCards: responseData });
                this.sortCardsBySet(responseData); // create subarrays of card objects by expansion
                this.processCards(responseData);
            })
            .catch((err) => console.log('Fetching and parsing data error', err));
    }

    // toggle box selection
    toggleBox(box) {
        let boxes = this.state.boxes; 
        let boxExists = boxes.includes(box); 
        try {
            if (boxExists) {
                boxes = boxes.filter(item => item !== box);
            } else {
                boxes.push(box);
            }
            this.setState({ boxes: boxes });
            this.filterCardsBySet();
        } catch(err) {
            console.log(err);
        }
    }
    
    // sorts cards
    processCards(cards) {
        let types = [];
        //let costs = [];
        //let strategies = [];
    
        cards.forEach(card => {
            types = types.concat(card.class); // adds card classes to array
            //costs.concat(card.cost); // adds cost to array
            //strategies.concat(card.strategy); // adds strategies to array
        });

        console.log(types);

        this.calcClassData(types);
        // this.calcCostData(costs);
        // this.calcStrategyData(strategies);
    }

    calcClassData(types) {
        const uniqueClasses = [...new Set(types)].sort(); 
        console.log(uniqueClasses);
        const quantities = [];
        uniqueClasses.forEach(type => {
            const count = this.countInArray(types, type);
            quantities.push(count);
        });

        this.setState({ class: { type: uniqueClasses, count: quantities }});
    }

    countInArray(array, query) {
        let count = 0;
        array.forEach(item => {if (item === query) count++});
        return count;
    }

    // sort cards by expansion
    sortCardsBySet(cards) {
        const dominion2 = [], intrigue2 = [], adventures = [], nocturne = [];

        cards.forEach(card => {
            switch (card.box) {
                case 'Dominion2':
                    dominion2.push(card);
                    break;
                case 'Intrigue2':
                    intrigue2.push(card);
                    break;
                case 'Adventures':
                    adventures.push(card);
                    break;
                case 'Nocturne':
                    nocturne.push(card);
                    break;
                default:
                    console.log('Error in SortCards');
                    break;
            }
        });

        this.setState({
            cardsBySet: {
                dominion2: dominion2,
                intrigue2: intrigue2,
                adventures: adventures,
                nocturne: nocturne,
            }
        });
    }

    // creates an array of cards based on selected boxes
    filterCardsBySet() {
        const selected = this.state.boxes;
        if (selected.length > 0) {
            let cards = [];
            if (selected.includes('Dominion2')) cards = cards.concat(this.state.cardsBySet.dominion2);
            if (selected.includes('Intrigue2')) cards = cards.concat(this.state.cardsBySet.intrigue2);
            if (selected.includes('Adventures')) cards = cards.concat(this.state.cardsBySet.adventures);
            if (selected.includes('Nocturne')) cards = cards.concat(this.state.cardsBySet.nocturne);
            this.setState({ setCards: cards });
        } else {
            this.setState({ setCards: this.state.cards });
        }
    }

    // TODO: function to change views
    showPage(e, page) {
        e.preventDefault();
        switch (page) {
            case 'card':
                this.setState({ showDeckList: false, showCardList: true });
                break;
            case 'deck':
                this.setState({ showDeckList: true, showCardList: false });
                break;        
            default:
                this.setState({ showCardList: false, showDeckList: false });
                break;
        }
    }

    // TODO: function to set filters

    render () {
        // show Deckbuilder on load, module will change to one of the libraries based on booleans
        const Content = () => {
            const cards = this.state.showCardList;
            const decks = this.state.showDeckList;

            if (cards) return <CardLibrary cards={this.state.setCards} />;
            if (decks) return <DeckLibrary boxes={this.state.boxes} />;

            return <Deckbuilder cards={this.state.setCards} />;
        };

        // if no sets specified, use all cards
        const cards = this.state.setCards ? this.state.setCards : this.state.cards;

        return (
            <main className="app">
                <section className="set__container">
                    <BoxContainer toggleBox={this.toggleBox} />
                    <ChartContainer cards={cards} />
                </section>  
                <Content />
            </main>
        );
    }
}

export default App;