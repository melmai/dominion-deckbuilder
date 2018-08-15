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
        <tr className="table__row">
            <td>{props.deck.name}</td>
            <td>{expansions}</td>
        </tr>
    )
}

const DeckTable = props => {
    const decks = props.decks;
    const deckRows = decks.map(deck => <DeckRow key={deck._id} deck={deck} />);

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

    render() {
        const decks = this.props.decks;
        return (
            <section className="deck-library">
                <DeckTable decks={decks} />
            </section>
        );
    }

}

export default DeckLibrary;