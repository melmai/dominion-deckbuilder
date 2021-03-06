import React from 'react';
import Icon from './basic/Icon';

/* const processMoney = text => {
    const moneyString = /(\d)\s\[M\]/;
    const strings = text.split(moneyString);
    return strings;
} */

const Coin = (props) => {
    return (
        <div className="card__abilities-money">
            <span>+&nbsp;</span>
            <div className="card__abilities-coin">
                {props.value}
            </div>
        </div>
    );
}

const AbilityList = (props) => {
    const abilities = props.abilities
    const keys = Object.keys(abilities);
    const values = Object.values(abilities);

    let items = [];
    for (let i = 0; i < keys.length; i++) {
        const processedKey = (key) => {
            if (key === 'money') { // replace money with coin
                items.push(<Coin value={values[i]} />);
                return null;
            } else { // replace with capitalized string and pluralize if needed
                const firstLetter = key.charAt(0).toUpperCase();
                let remainder = key.substring(1);
                if (values[i] > 1) remainder = remainder.concat('s');
                return firstLetter.concat(remainder);
            }
        }
        if (!processedKey(keys[i])) break;
        items.push(`+${values[i]} ${processedKey(keys[i])}`);
    }

    return (
        <ul className="card__abilities">
            {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
    );    
}

const Card = (props) => {
    let cardType = props.card.class;
    cardType = cardType.join('-');

    const cardClass = (type) => {
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

    const cardText = (text) => {
        if (!text) return null;
        //const victoryString = /\[VP\]/;
        //const textCoin = value => <span className="card__abilities-coin">{value}</span>;
        //const coin = value => <Coin value={value} />;
        //const victory = victoryString.test(processedText);
        if (text.includes('//')) {
            const textArray = text.split('//');
            /* for (const item of textArray) {
                let processedArray = [];
                if (item.includes('[M]')) processedArray = processMoney(item);
                if (item.includes('[VP]')) console.log(`VP: ${item}`);
                //console.log(processedArray);
            } */
            return (
                <div className="card__text">
                    <span className="card__text-value">{textArray[0]}</span>
                    <div className="card__text-divider" />
                    <span className="card__text-value">{textArray[1]}</span>
                </div>
            );
        }
        return (
            <div className="card__text">
                <span className="card__text-value">{text}</span>
            </div>
        );
    }

    const heirloom = () => props.card.heirloom ? <span className="card__heirloom">Heirloom: {props.card.heirloom}</span> : null;
    const abilities = (abilities) => abilities ? <AbilityList abilities={props.card.abilities} /> : null;

    return (
        <section className={cardClass(props.card.class)}>
            <h1 className="card__name">{props.card.name}</h1>
            <div className="card__icon_container"><Icon box={props.card.box} /></div>
            <div className="card__divider" />
            <div className="card__text_container">
                {abilities(props.card.abilities)}
                {cardText(props.card.text)}
            </div>
            <div className="card__bottom_banner">
                {heirloom(props.card.heirloom)}
                <p className="card__type">{cardType}</p>
                <span className="card__cost">{props.card.cost}</span>
            </div>
        </section>
    );
}

export default Card;