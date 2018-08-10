import React from 'react';

export const Card = (props) => {
    let cardType = props.card.class;
    console.log(cardType);
    cardType = cardType.join('-');

    const icon = (box) => {
        switch (box) {
            case 'Dominion2':
                return <img src="/img/dominion2-icon.svg" alt="Dominion Icon" class="card__icon_img" />
            case 'Intrigue2':
                return <img src="/img/intrigue2-icon.svg" alt="Intrigue Icon" class="card__icon_img" />
            case 'Adventures':
                return <img src="/img/adventures-icon.svg" alt="Adventures Icon" class="card__icon_img" />
            case 'Nocturne':
                return <img src="/img/nocturne-icon.svg" alt="Nocturne Icon" class="card__icon_img" />
            default:
                console.log('Error rendering icon');
        }
    }

    let cardClass = (type) => {
        let name = 'card';
        if (type.includes('Duration') && type.includes('Reaction')) name = `${name} card__duration-reaction`;
        if (type.includes('Treasure') && type.includes('Reserve')) name = `${name} card__treasure-reserve`;
        if (type.includes('Treasure') && type.includes('Victory')) name = `${name} card__treasure-victory`;
        if (type.includes('Reserve') && type.includes('Victory')) name = `${name} card__reserve-victory`;
        if (type.includes('Duration')) name = `${name} card__duration`;
        if (type.includes('Reserve')) name = `${name} card__reserve`;
        if (type.includes('Victory')) name = `${name} card__victory`;
        if (type.includes('Night')) name = `${name} card__night`;
        if (type.includes('Treasure')) name = `${name} card__treasure`;
        if (type.includes('Reaction')) name = `${name} card__reaction`;
        return name;
    }

    const heirloom = () => props.card.heirloom ? <span className="card__heirloom">Heirloom: {props.card.heirloom}</span> : null;

    return (
        <section className={cardClass(props.card.class)}>
            <h1 className="card__name">{props.card.name}</h1>
            <div className="card__icon_container">{icon(props.card.box)}</div>
            <div className="card__divider" />
            <div className="card__text_container">
                <p className="card__text">{props.card.text}</p>
            </div>
            <div className="card__bottom_banner">
                {heirloom(props.card.heirloom)}
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

