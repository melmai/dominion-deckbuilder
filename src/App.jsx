import React, { Component } from 'react';
import CardLibrary from './components/CardLibrary';
import Nav from './components/basic/Nav';
import DeckLibrary from './components/DeckLibrary';
import BoxContainer from './components/BoxContainer';
import Box from './components/Box';
import ChartContainer from './components/ChartContainer';
//import Button from './components/basic/Button';
import DeckBuilder from './components/DeckBuilder';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

class App extends Component {
    constructor(props) {
        super(props);
    
        // set state
        this.state = {
            boxes: [],
            cards: [],
            cardsBySet: { dominion2: [], intrigue2: [], adventures: [], nocturne: [] },
            class: { type: [], count: [] },
            cost: { type: [], count: [] },
            strategy: { type: [], count: [] },
            setCards: [],
            decks: [],
        };

        this.filterCardsBySet = this.filterCardsBySet.bind(this);
        this.loadData = this.loadData.bind(this);
        this.toggleBox = this.toggleBox.bind(this);
        this.processCards = this.processCards.bind(this);
        this.sortCardsBySet = this.sortCardsBySet.bind(this);
        this.calcData = this.calcData.bind(this);
        this.countInArray = this.countInArray.bind(this);
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
            .catch((err) => console.log('Fetching and parsing card data error', err));
        
        fetch(`/api/decks/`)
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    decks: responseData
                });
                console.log(this.state.deckCards);
            })
            .catch((err) => {
                console.log('Fetching and parsing deck data error', err)
            });   
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
            class: { type: classData.type, count: classData.count },
            cost: { type: costData.type, count: costData.count },
            strategy: { type: strategyData.type, count: strategyData.count },
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
    
    render () {
        // if no sets specified, use all cards
        const cards = this.state.setCards ? this.state.setCards : this.state.cards;
        const dominion2 = this.state.cardsBySet.dominion2;
        const intrigue2 = this.state.cardsBySet.intrigue2;
        const adventures = this.state.cardsBySet.adventures;
        const nocturne = this.state.cardsBySet.nocturne;

        const CardList = () => <CardLibrary 
                                        boxes={this.state.boxes} 
                                        dominion2={dominion2} 
                                        intrigue2={intrigue2} 
                                        adventures={adventures} 
                                        nocturne={nocturne} 
                                    />;
        const DeckList = () => <DeckLibrary 
                                        decks={this.state.decks} 
                                        cards={this.state.setCards} 
                                    />;
        const Deckbuilder = () => <DeckBuilder 
                                        cards={this.state.setCards} 
                                        boxes={this.state.boxes} 
                                        dominion2={dominion2} 
                                        intrigue2={intrigue2}
                                        adventures={adventures}
                                        nocturne={nocturne}
                                    />;
        
        return (
            <BrowserRouter>
                <div className="app">
                    <header className="header">
                        <h1 className="header__title">Dominion</h1>
                        <span className="header__subtitle">Deckbuilder</span>
                        <Nav />
                    </header>
                    <main>
                        <section className="set__container">
                            <BoxContainer>
                                <Box name="Dominion2" label="Dominion (2nd edition)" toggleBox={this.toggleBox} />
                                <Box name="Intrigue2" label="Intrigue (2nd edition)" toggleBox={this.toggleBox} />
                                <Box name="Adventures" label="Adventures" toggleBox={this.toggleBox} />
                                <Box name="Nocturne" label="Nocturne" toggleBox={this.toggleBox} /> 
                            </BoxContainer>
                            <ChartContainer cards={cards} classData={this.state.class} costData={this.state.cost} strategyData={this.state.strategy} />
                        </section>
                        <Switch>
                            <Route path="/" exact component={Deckbuilder} />
                            <Route path="/cards" component={CardList} />
                            <Route path="/decks" component={DeckList} />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;