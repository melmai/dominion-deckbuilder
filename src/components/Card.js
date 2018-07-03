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
                let card = responseData[0];
                let abilities = responseData[0].abilities ? responseData[0].abilities : false;
                this.setState({
                    name: card.name,
                    id: card._id,
                    cost: card.cost,
                    abilities: {
                        buy: abilities.buy,
                        action: abilities.action,
                        money: abilities.money,
                        trash: abilities.trash,
                        card: abilities.card 
                    } ,
                    class: card.class,
                    text: card.text,
                    box: card.box,
                    journeyToken: card.journeyToken,
                    heirloom: card.heirloom,
                    linkedCard: card.linkedCard,
                })
            })
            .catch((err) => {
                console.log('Fetching and parsing data error', err)
            });
    }

    render() {

        // basic card info
        let text = this.state.text;
        let cost = this.state.cost;
        let linkedCard = this.state.linkedCard;
        let heirloom = this.state.heirloom;

        // abilities
        let actions = this.state.abilities.action;
        let money = this.state.abilities.money;
        let buys = this.state.abilities.buy;
        let cards = this.state.abilities.card;

        return (
            <div className="card">
                <h2>{this.state.name}</h2>
                <ul className="card-abilities">
                    { actions ? <li>+{actions} Actions</li> : '' }
                    { money ? <li>+{money} Money</li> : '' }
                    { buys ? <li>+{buys} Buys</li> : '' }
                    { cards ? <li>+{cards} Cards</li> : '' }
                </ul>
                <p>{text}</p>
                <p>{cost}</p>
                <p>{ linkedCard ? linkedCard : '' }</p>
                <p>{ heirloom ? heirloom : '' }</p>
            </div>
        );
    }
}

Card.propTypes = {

};

export default Card;