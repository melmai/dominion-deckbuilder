import React, { Component } from 'react';
import Filter from './Filter';
// import Button from './Button';

// this component will generate a deck of 10 cards based on user preferences
// input: [ boxes ], { filters }
// output: [ cards ]
const Card = (props) => (
    <section className="card">
        <h1>{props.card.name}</h1>
        <p>{props.card.cost}</p>
        <p>{props.card.box}</p>
    </section>
);


function Deck(props) {
    const cards = props.cards;
    if (!cards) return null; 
    cards.forEach(card => <Card key={card._id} card={card} />);
}

class Deckbuilder extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            deckID: 0,
            setCards: this.props.cards,
            filters: {},
            deck: [],
            showFilters: true
        }
    }

    componentDidMount() {
    }
    
    
    // TODO: hide filters, show deck on button click
    showDeck(e) {
        e.preventDefault();
    }

    // TODO: hide deck, show filters on button click
    showFilters(e) {
        e.preventDefault();
    }

    // TODO: create deck based on user prefs, will need add'l helper fxns
    createDeck() {}

    // TODO: show basic setup (curses, treasures, victory) based on # of players
    showSetup() {}

    // TODO: show add'l setup (tavern mat, tokens, etc)
    showExpansionSetup() {}

    // render filters or deck
    render() {
        const Content = () => this.state.showFilters ? <Filter /> : <Deck cards={this.props.cards} />;

        return (
            <Content />
        );
    }
}

export default Deckbuilder;
