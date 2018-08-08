import React from 'react';

export const Card = (props) => {
    let cardType = props.card.class;
    console.log(cardType);
    cardType = cardType.join('-');

    return (
        <section className="card">
            <h1 className="card__name">{props.card.name}</h1>
            <div className="card__icon">{props.card.box}</div>
            <div className="card__divider" />
            <div className="card__text_container">
                <p className="card__text">{props.card.text}</p>
            </div>
            <div className="card__bottom_banner">
                <p className="card__type">{cardType}</p>
                <span className="card__cost">{props.card.cost}</span>
            </div>
        </section>
    );


}

export function Deck(props) {
    let cards = props.cards;
    if (cards) cards = cards.map(card => <Card key={card._id} card={card} />);
    return (
        <section className="deck__container">
            {cards}
        </section>
    );
}

