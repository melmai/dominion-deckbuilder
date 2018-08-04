import React, { Component } from 'react';
import Deckbuilder from './components/Deckbuilder';
import CardLibrary from './components/CardLibrary';
import DeckLibrary from './components/DeckLibrary';
import BoxContainer from './components/BoxContainer';
import Chart from './components/Chart';

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
            filteredCards: [],
            showCardList: false,
            showDeckList: false
        };

        this.filterCardsBySet = this.filterCardsBySet.bind(this);
        this.loadData = this.loadData.bind(this);
        this.toggleBox = this.toggleBox.bind(this);
        this.sortCardsBySet = this.sortCardsBySet.bind(this);
        this.showPage = this.showPage.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        const oldSelection = prevState.boxes;
        const newSelection = this.state.boxes;
        if (oldSelection === newSelection) return;
        if (!newSelection) {
            this.setState({ filteredCards: this.state.cards });
        } else {
            this.filterCardsBySet();
        }
    }
    

    // get initial data
    loadData() {
        fetch('/api/cards/')
            .then(response => response.json())
            .then(responseData => {
                this.setState({ cards: responseData, filteredCards: responseData });
                this.sortCardsBySet();
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
    
    // sorts cards into subarrays by set
    sortCardsBySet() {
        const cards = this.state.cards;
        const dominion2 = [], intrigue2 = [], adventures = [], nocturne = [];
        cards.forEach(card => {
            if (card.box === "Dominion2") dominion2.push(card);
            if (card.box === "Intrigue2") intrigue2.push(card);
            if (card.box === "Adventures") adventures.push(card);
            if (card.box === "Nocturne") nocturne.push(card);
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
            this.setState({ filteredCards: cards });
        } else {
            this.setState({ filteredCards: this.state.cards });
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
        const Content = () => {
            const cards = this.state.showCardList;
            const decks = this.state.showDeckList;

            if (cards) return <CardLibrary cards={this.state.filteredCards} />;
            if (decks) return <DeckLibrary boxes={this.state.boxes} />;

            return <Deckbuilder cards={this.state.filteredCards} />;
        };

        return (
            <div>
                <section className="set__container">
                    <BoxContainer toggleBox={this.toggleBox} />
                    <Chart />
                </section>
                <Content />
            </div>
        );
    }
}

export default App;