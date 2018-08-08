import React from 'react';

export const Card = (props) => (
    <section className="card">
        <h1>{props.card.name}</h1>
        <p>{props.card.cost}</p>
        <p>{props.card.box}</p>
    </section>
);

export function Deck(props) {
    let cards = props.cards;
    if (cards) cards = cards.map(card => <Card key={card._id} card={card} />);
    return (
        <section className="deck__container">
            {cards}
        </section>
    );
}

