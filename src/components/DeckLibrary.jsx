import React, { Component } from 'react';
//import Deck from './Deck';

const DeckRow = props => <tr className="table__row"><td>{props.deck.name}</td></tr>;

const DeckTable = props => {
    const decks = props.decks;
    const deckRows = decks.map(deck => <DeckRow key={deck._id} deck={deck} />);

    return (
        <table className="table">
            <thead className="table__header">
                <tr>
                    <td>Name</td>
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