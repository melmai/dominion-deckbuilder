import React from 'react';
import Card from './Card';

export const BlankCard = () => (
    <section className="card card__blank">
        <span className="card__name left">Dominion</span>
        <span className="card__name right">Dominion</span>
    </section>
);

export function Deck(props) {
    let cards = props.cards;
    if (!cards) {
        return (
            <section className="deck__container">
                <BlankCard />
                <BlankCard />
                <BlankCard />
                <BlankCard />
                <BlankCard />
                <BlankCard />
                <BlankCard />
                <BlankCard />
                <BlankCard />
                <BlankCard />
            </section>
        );
    } else {
        cards = cards.map(card => <Card key={card._id} card={card} />);
        return (
            <section className="deck__container">
                {cards}
            </section>
        );
    }
}

export default Deck;