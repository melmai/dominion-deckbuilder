import React, { Component } from 'react';
//import CardLibrary from './components/CardLibrary';
//import DeckLibrary from './components/DeckLibrary';
import BoxContainer from './components/BoxContainer';
import Box from './components/Box';
import ChartContainer from './components/ChartContainer';
import Button from './components/basic/Button';
import Filter from './components/Filter';
import Result from './components/Result';

class App extends Component {
    constructor(props) {
        super(props);
    
        // set state
        this.state = {
            boxes: [],
            filters: {},
            cards: [],
            cardsBySet: { dominion2: [], intrigue2: [], adventures: [], nocturne: [] },
            class: { type: [], count: [] },
            cost: { type: [], count: [] },
            strategy: { type: [], count: [] },
            setCards: [],
            filteredCards: [],
            library: '',
            showList: false,
            showFilters: true,
            deck: []
        };

        this.filterCardsBySet = this.filterCardsBySet.bind(this);
        this.loadData = this.loadData.bind(this);
        this.toggleBox = this.toggleBox.bind(this);
        this.processCards = this.processCards.bind(this);
        this.sortCardsBySet = this.sortCardsBySet.bind(this);
        this.calcData = this.calcData.bind(this);
        //this.showPage = this.showPage.bind(this);
        this.countInArray = this.countInArray.bind(this);
        this.createDeck = this.createDeck.bind(this);
        this.toggleFilters = this.toggleFilters.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate(prevProps, prevState) {
        const oldSelection = prevState.boxes;
        const newSelection = this.state.boxes;
        if (newSelection !== oldSelection) {
            const cards = this.filterCardsBySet();
            this.processCards(cards);
        }

        if (prevState.deck !== this.state.deck) {

        }

    }

    // get initial data
    loadData() {
        fetch('/api/cards/')
            .then(response => response.json())
            .then(responseData => {
                this.setState({ cards: responseData, setCards: responseData });
                this.sortCardsBySet(responseData); // create subarrays of card objects by expansion
                this.processCards(responseData); // break down data to use in charts
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
            const cards = this.filterCardsBySet();
            this.processCards(cards);            
        } catch(err) {
            console.log(err);
        }
    }
    
    // sorts cards
    // TODO: change strategy object to an array
    processCards(cards) {
        let types = [];
        let costs = [];
        let strategies = [];
    
        cards.forEach(card => {
            types = types.concat(card.class);
            costs = costs.concat(card.cost);

            // deconstructs strategy object to append strategies only if present
            const strategy = card.strategy;
            const keys = Object.keys(strategy);
            const values = Object.values(strategy);

            for (let i = 0; i < keys.length; i++) {
                if (values[i] === 1) strategies.push(keys[i]);
            }
        });

        const classData = this.calcData(types);
        const costData = this.calcData(costs);
        const strategyData = this.calcData(strategies);

        this.setState({
            setCards: cards,
            class: {
                type: classData.type,
                count: classData.count
            },
            cost: {
                type: costData.type,
                count: costData.count
            },
            strategy: {
                type: strategyData.type,
                count: strategyData.count
            },
        });
    }

    calcData(array) {
        const uniqueTypes = [...new Set(array)].sort();
        const quantities = [];

        uniqueTypes.forEach(type => {
            const count = this.countInArray(array, type);
            quantities.push(count);
        });

        return ({ type: uniqueTypes, count: quantities });        
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
        let cards = [];
        if (selected.length > 0) {
            if (selected.includes('Dominion2')) cards = cards.concat(this.state.cardsBySet.dominion2);
            if (selected.includes('Intrigue2')) cards = cards.concat(this.state.cardsBySet.intrigue2);
            if (selected.includes('Adventures')) cards = cards.concat(this.state.cardsBySet.adventures);
            if (selected.includes('Nocturne')) cards = cards.concat(this.state.cardsBySet.nocturne);
        } else {
            cards = this.state.cards;
        }
        return cards;
    }
/* 
    // TODO: function to change views
    showPage(e, page) {
        e.preventDefault();
        switch (page) {
            case 'card': // card library
                this.setState({ showDeckList: false, showCardList: true });
                break;
            case 'deck': // deck library
                this.setState({ showDeckList: true, showCardList: false });
                break;        
            case 'result': // result
                this.setState({ showDeckList: true, showCardList: false });
                break;        
            default: // filters
                this.setState({ showCardList: false, showDeckList: false });
                break;
        }
    } */

    // creates deck from setCards array (no filters)
    createDeck() {
        let cards = this.state.setCards;
        let deck = [];
        do {
            const index = Math.round(Math.random() * (cards.length-1));
            const card = cards[index];
            if (!deck.includes(card)) deck.push(card);
        } while (deck.length < 10)

        this.setState({
            deck: deck,
            showFilters: false
        });
        return deck;
    }

    // TODO: hide deck, show filters on button click
 /*    toggleFilters(e) {
        e.preventDefault();
        this.setState({
            showFilters: !this.state.showFilters
        });
    } */

      toggleFilters() {
          this.setState(prevState => ({
              showFilters: !prevState.showFilters
          }));
      }

    // TODO: function to set filters
    setFilters(){}
    
    render () {
        // if no sets specified, use all cards
        const cards = this.state.setCards ? this.state.setCards : this.state.cards;
        const deck = this.state.deck;

        let result = (this.state.deck.length > 0) ? <Result cards={deck} /> : 'Select Expansions and/or Preferences';
        let filter = this.state.showFilters ? <Filter /> : '';

        return (
            <main className="app">
                <section className="set__container">
                    <BoxContainer>
                        <Box name="Dominion2" label="Dominion (2nd edition)" toggleBox={this.toggleBox} />
                        <Box name="Intrigue2" label="Intrigue (2nd edition)" toggleBox={this.toggleBox} />
                        <Box name="Adventures" label="Adventures" toggleBox={this.toggleBox} />
                        <Box name="Nocturne" label="Nocturne" toggleBox={this.toggleBox} /> 
                        <Button className="btn btn__create_deck" onClick={(e) => this.createDeck(e)}>Create Deck</Button>
                    </BoxContainer>
                    <ChartContainer cards={cards} classData={this.state.class} costData={this.state.cost} strategyData={this.state.strategy} />
                </section>
                <section className="setup__container">
                    <Button className="btn btn__toggle_filters" onClick={this.toggleFilters}>{this.state.showFilters ? 'Show Setup' : 'Show Filters'}</Button>
                    {filter}
                    {result}
                </section>
            </main>
        );
    }
}

export default App;