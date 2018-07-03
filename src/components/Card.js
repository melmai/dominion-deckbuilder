import React, { Component } from 'react';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 0,
            cost: Number,
            class: [],
            abilities: {
                buy: 0,
                card: 0,
                action: 0,
                money: 0,
                trash: 0
            },
            text: 'text',
            box: 'box',
            journeyToken: false,
            heirloom: 'heirloom',
            linkedCard: 'linkedCard',
        };

        // bind events
        this.getCard = this.getCard.bind(this);
    }

    
    componentDidMount() {
        this.getCard(this.props.id);
    }

    getCard(id) {
        fetch(`/api/card/${id}`)
            .then(response => response.json())
            .then(responseData => {
                const abilities = responseData[0].abilities ? responseData[0].abilities : false;
                this.setState({
                    name: responseData[0].name,
                    id: responseData[0]._id,
                    cost: responseData[0].cost,
                    abilities: {
                        buy: abilities.buy,
                        action: abilities.action,
                        money: abilities.money,
                        trash: abilities.trash,
                        card: abilities.card 
                    } ,
                    class: responseData[0].class,
                    text: responseData.text,
                    box: responseData.box,
                    journeyToken: responseData.journeyToken,
                    heirloom: responseData.heirloom,
                    linkedCard: responseData.linkedCard,
                })
            })
            .catch((err) => {
                console.log('Fetching and parsing data error', err)
            });
    }

    render() {
        return (
            <div className="card">
                <h2>{this.state.name}</h2>
                <p>Action: {this.state.abilities.action}</p>
                <p>Money: {this.state.abilities.money}</p>
                <p>Buy: {this.state.abilities.buy}</p>
                <p>Card: {this.state.abilities.card}</p>
            </div>
        );
    }
}

Card.propTypes = {

};

export default Card;