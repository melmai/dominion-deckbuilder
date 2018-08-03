import React, { Component } from 'react';
import './App.css';
//import Deckbuilder from './components/Deckbuilder';
import CardLibrary from './components/CardLibrary';
import BoxContainer from './components/BoxContainer';
//import Filter from './components/Filter';

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
            filteredCards: []
        };

        this.filterCardsBySet = this.filterCardsBySet.bind(this);
        this.loadData = this.loadData.bind(this);
        this.toggleBox = this.toggleBox.bind(this);
        this.sortCardsBySet = this.sortCardsBySet.bind(this);
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

    // TODO: function to show conditional views based on state values
    // TODO: function to set filters

    render () {
        return (
            <div>
                <header />
                <BoxContainer toggleBox={this.toggleBox} />
                <CardLibrary cards={this.state.filteredCards} />
                <footer />
            </div>
        );
    }
}

export default App;