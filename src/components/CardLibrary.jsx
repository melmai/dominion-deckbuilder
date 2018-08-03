import React, { Component } from 'react';

const Row = (props) => (
    <tr onClick={() => props.showCard(props.card._id)}>
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
                {cards.map(card => <Row key={card._id} card={card} showCard={props.showCard} />)}
            </tbody>
        </table>
    );
}

class CardLibrary extends Component {
    constructor(props) {
        super(props);

        this.state = { cardID: 0 }
        
        this.showCard = this.showCard.bind(this);
        this.hideCard = this.hideCard.bind(this);
    }    
    
    // TODO: show card details
    showCard(id) {
        // set cardID
        this.setState({ cardID: id });
    }
    // TODO: show card list
    hideCard() {
        // unset cardID
        this.setState({ cardID: 0 });
    }
    
    render() {
        return (
            <Table cards={this.props.cards} showCard={this.showCard} />        
        );
    }
}

export default CardLibrary;
