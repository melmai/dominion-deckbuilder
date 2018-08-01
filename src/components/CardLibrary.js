import React, { Component } from 'react';

const Row = (props) => (
    <tr>
        <td>{props.card.name}</td>
        <td>{props.card.cost}</td>
        <td>{props.card.box}</td>
        <td>{props.card.text}</td>
    </tr>
);

function Table(props) {
    const cards = props.cards;
    return(
        <table>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Cost</td>
                    <td>Box</td>
                    <td>Text</td>
                </tr>
            </thead>
            <tbody>
                {cards.map(card => <Row key={card._id} card={card} />)}
            </tbody>
        </table>
    );
}

class CardLibrary extends Component {
    constructor(props) {
        super(props);
        
        this.hideCards = this.hideCards.bind(this);
    }
    
    // TODO: function to hide cards if not part of selected boxes
    hideCards(boxes) {

    }

    // TODO: function to show card details when selected from list
    // TODO: function to show stats based on seleted boxes
    
    render() {
        return (
            <div>
                <Table cards={this.props.cards} />
            </div>
        );
    }
}

export default CardLibrary;