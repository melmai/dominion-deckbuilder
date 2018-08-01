import React, { Component } from 'react';

const Row = (props) => (
    <tr key={props.card._id}>
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
                {cards.map(card => <Row card={card} />)}
            </tbody>
        </table>
    );
}

class Library extends Component {
    
    
    render() {
        return (
            <div>
                <Table cards={this.props.cards} />
            </div>
        );
    }
}

export default Library;