import React, { Component } from 'react';
//import Deck from './Deck';

const DeckRow = props => {
    const expansions = [];
    let { adventures, dominion, intrigue, nocturne } = props.deck.cards;
    if (adventures.length > 0) expansions.push('Adventures');
    if (dominion.length > 0) expansions.push('Dominion');
    if (intrigue.length > 0) expansions.push('Intrigue');
    if (nocturne.length > 0) expansions.push('Nocturne');

    return (
        <tr onClick={(e) => props.showDeck(props.deck._id, e)} className="table__row">
            <td>{props.deck.name}</td>
            <td>{expansions}</td>
        </tr>
    )
}

const DeckTable = props => {
    const decks = props.decks;
    const deckRows = decks.map(deck => <DeckRow key={deck._id} deck={deck} showDeck={props.showDeck} />);

    return (
        <table className="table">
            <thead className="table__header">
                <tr>
                    <td>Name</td>
                    <td>Expansions</td>
                </tr>
            </thead>
            <tbody>
                {deckRows}
            </tbody>
        </table>
    );
}

class DeckLibrary extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: 0,
            decks: []
        }

        this.showDeck = this.showDeck.bind(this);
        //this.loadData = this.loadData.bind(this);
    }

    /* componentDidMount() {
        this.createDecks();
    } */

    /* createDecks() {
        const decks = this.props.decks;
        let dominionCards, intrigueCards, adventuresCards, nocturneCards;
        let newDecks = decks.map(deck => {
            if (deck.cards.dominion > 0) 
            return (
                {
                    _id: deck._id,
                    name: deck.name,
                    cards: {
                        dominion: {dominionCards},
                        intrigue: {intrigueCards},
                        adventures: {adventuresCards},
                        nocturne: {nocturneCards}
                    }
                }
            );
        });
    }*/

    // transforms [string] to [obj]
    strToObj(array) {
        let cards = [];
        array.forEach(str => {
            const card = this.props.cards.find(card => card.name === str);
            cards.push(card);
        });
        return cards;
    }

    showDeck(id) {
        let deck = this.props.decks.find(deck => deck._id === id);
        let { adventures, dominion, intrigue, nocturne } = deck.cards;
        if (nocturne.length > 0) nocturne = this.strToObj(nocturne);
        if (adventures.length > 0) adventures = this.strToObj(adventures);
        if (dominion.length > 0) dominion = this.strToObj(dominion);
        if (intrigue.length > 0) intrigue = this.strToObj(intrigue);

        deck = nocturne.concat(adventures, dominion, intrigue);
        this.setState({ 
            id: id,
            deck: deck
        })
    } 

    render() {
        const decks = this.props.decks;
        return (
            <section className="deck-library">
                <DeckTable decks={decks} showDeck={this.showDeck} />
            </section>
        );
    }

}

export default DeckLibrary;