import React from 'react';

function Filter(props) {
    return (
        <form className="filter__container">
            <input type="checkbox" name="equalSplit" onChange={props.toggleSplit} checked={props.equalSplit} /> 
            <label htmlFor="equalSplit">Draw 5 cards from each set</label>
        </form>
    );
} 

export default Filter;