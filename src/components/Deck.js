import React, { Component } from 'react';
import Card from './Card';

class Deck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: []
        };

        // bind events
        this.getCards = this.getCards.bind(this);
    }

    
    componentDidMount() {
        this.getCards();
    }

    getCards() {
        fetch('/api/cards/')
            .then(response => response.json())
            .then(responseData => {
                this.setState({ cards: responseData });
                console.log(this.state.cards);
            })
            .catch((err) => {
                console.log('Fetching and parsing data error', err)
            });
    }

    render() {

        
        return (
            <div className="deck">
                {this.state.cards.map((card) => <Card key={card._id} id={card._id} />)} 
            </div>
        );
    }
}

Deck.propTypes = {

};

export default Deck;