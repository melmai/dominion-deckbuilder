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
            showLibrary: false,
            cardID: 0,
            cards: [],
            cardsBySet: {
                dominion2: [],
                intrigue2: [],
                adventures: [],
                nocturne: [],
            }
        };

        this.loadData = this.loadData.bind(this);
        this.toggleBox = this.toggleBox.bind(this);
        this.sortCardsBySet = this.sortCardsBySet.bind(this);
    }

    componentDidMount() {
        this.loadData();
    }

    // get initial data
    loadData() {
        fetch('/api/cards/')
            .then(response => response.json())
            .then(responseData => {
                this.setState({ cards: responseData });
                this.sortCardsBySet();
            })
            .catch((err) => console.log('Fetching and parsing data error', err));
    }

    // toggle box selection
    toggleBox(box) {
        console.log(box);
        let boxes = this.state.boxes; 
        let boxExists = boxes.includes(box); 
        try {
            if (boxExists) {
                boxes = boxes.filter(item => item !== box);
            } else {
                boxes.push(box);
            }
            this.setState({ boxes: boxes });
        } catch(err) {
            console.log(err);
        }
        
    }
    
    // sorts cards into subarrays by set
    sortCardsBySet() {
        const cards = this.state.cards;
        const dominion2 = [], intrigue2 = [], adventures = [], nocturne = [];
        cards.forEach(card => {
            console.log(card.box);
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

    // TODO: function to show conditional views based on state values
    // TODO: function to set filters

    render () {
        return (
            <div>
                <header />
                <BoxContainer toggleBox={this.toggleBox}/>
                <CardLibrary boxes={this.state.boxes} cards={this.state.cards} />
                <footer />
            </div>
        );
    }
}

export default App;