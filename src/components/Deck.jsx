import React from 'react';
import Card from './Card';

export function Deck(props) {
    let cards = props.cards;
    if (cards) cards = cards.map(card => <Card key={card._id} card={card} />);
    return (
        <section className="deck__container">
            {cards}
        </section>
    );
}

export default Deck;