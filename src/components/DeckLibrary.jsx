import React, { Component } from 'react';
import Deck from './Deck';
import Icon from './basic/Icon';

const DeckRow = props => {
    const expansions = [];
    let { adventures, dominion, intrigue, nocturne } = props.deck.cards;
    if (adventures.length > 0) expansions.push('Adventures');
    if (dominion.length > 0) expansions.push('Dominion');
    if (intrigue.length > 0) expansions.push('Intrigue');
    if (nocturne.length > 0) expansions.push('Nocturne');

    //const icons = expansions => expansions.map(exp => <Icon box={exp} />);

    const details = (array, id) => {
        if (id === props.id) {
            return <Deck cards={array} />;
        }
        return null;
    }

    return (
        <section onClick={(e) => props.showDeck(props.deck._id, e)} className="deck__row">
            <section className="deck__info">
                <span className="deck__info--name">{props.deck.name}</span>
                <span className="deck__info--expansions">{expansions}</span>
            </section>
            {details(props.details, props.deck._id)}
        </section>
    )
}

const DeckTable = props => {
    const decks = props.decks;
    const deckRows = decks.map(deck => <DeckRow key={deck._id} deck={deck} showDeck={props.showDeck} details={props.details} id={props.id} />);

    return (
        <article className="deck-library">
            <header className="deck__info">
                <span className="deck__info--name">Name</span>
                <span className="deck__info--expansions">Expansions</span>
            </header>
            {deckRows}
        </article>
    );
}

class DeckLibrary extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: 0,
            deck: []
        }

        this.showDeck = this.showDeck.bind(this);
        this.strToObj = this.strToObj.bind(this);
    }

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
        return <DeckTable 
                    decks={decks} 
                    showDeck={this.showDeck} 
                    details={this.state.deck} 
                    id={this.state.id} 
                />
    }

}

export default DeckLibrary;