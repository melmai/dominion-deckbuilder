import React, { Component } from 'react';

class Filter extends Component {
    // props: boxes
    constructor() {
        super();
        
        this.state = {
            equalSplit: true,
        }

        this.toggleSplit = this.toggleSplit.bind(this);
    }

    toggleSplit() {
        this.setState(prevState => ({ equalSplit: !prevState.equalSplit }));
    }

    render() {
        return (
            <form className="filter__container">
                <input type="checkbox" name="equalSplit" value={this.state.equalSplit} onChange={this.toggleSplit} checked /> 
                <label htmlFor="equalSplit">Draw 5 cards from each set</label>
            </form>
        );
    }
} 

export default Filter;