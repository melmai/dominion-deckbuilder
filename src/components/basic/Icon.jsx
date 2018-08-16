import React from 'react';

const Icon = props => {
    switch (props.box) {
        case 'Dominion2':
            return <img src="/img/dominion2-icon.svg" alt="Dominion" className="card__icon_img" />
        case 'Intrigue2':
            return <img src="/img/intrigue2-icon.svg" alt="Intrigue" className="card__icon_img" />
        case 'Adventures':
            return <img src="/img/adventures-icon.svg" alt="Adventures" className="card__icon_img" />
        case 'Nocturne':
            return <img src="/img/nocturne-icon.svg" alt="Nocturne" className="card__icon_img" />
        default:
            console.log('Error rendering icon');
    }
}

export default Icon;