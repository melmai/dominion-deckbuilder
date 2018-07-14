import React, { Component } from 'react';
import Card from './Card';

class Deck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allCards: [],
            deckID: 0,
            nocturneCards: [],
            adventuresCards: [],
            intrigue2Cards: [],
            dominion2Cards: []
        };

        // bind events
        this.getCards = this.getCards.bind(this);
        this.getDeck = this.getDeck.bind(this);
    }

    componentDidMount() {
        this.getCards();
    }

    // get complete list of cards
    getCards() {
        fetch('/api/cards/')
            .then(response => response.json())
            .then(responseData => this.setState({ allCards: responseData }))
            .catch((err) => console.log('Fetching and parsing data error', err));
    }

    getDeck(id) {
        fetch(`/api/deck/${id}`)
            .then(response => response.json())
            .then(responseData => {
                console.log(responseData);
                this.setState({
                    nocturneCards: responseData.cards.nocturne,
                    adventuresCards: responseData.cards.adventures,
                    intrigue2Cards: responseData.cards.intrigue,
                    dominion2Cards: responseData.cards.dominion
                });
                console.log(this.state.deckCards);
            })
            .catch((err) => {
                console.log('Fetching and parsing data error', err)
            });
    }

    render() {

        
        return (
            <div className="deck">
                {this.state.allCards.map((card) => <Card key={card._id} id={card._id} />)} 
            </div>
        );
    }
}

Deck.propTypes = {

};

export default Deck;