import React, { Component } from 'react';

class Filter extends Component {
    // props: boxes
    constructor() {
        super();
        
        this.state = {
            equalSplit: true,
        }
    }
    

    render() {
        return (
            <form className="filter__container">
                <input type="checkbox" name="equalSplit" value="equalSplit" /> 
                <label htmlFor="equalSplit">Draw 5 cards from each set</label>
            </form>
        );
    }
} 

export default Filter;