import React, { Component } from 'react';
import Box from './Box';
import Button from './Button';


class BoxContainer extends Component {
    render() {
        return (
            <div className="box-container">
                <div className="boxes">
                    <Box name="Dominion 2nd ed" onClick={ this.props.toggleBox } />
                    <Box name="Intrigue 2nd ed" onClick={ this.props.toggleBox } />
                    <Box name="Adventures" onClick={ this.props.toggleBox } />
                    <Box name="Nocturne" onClick={ this.props.toggleBox } />
                </div>
                <Button onClick={ (e) => this.props.showBoxCards(e) } value="View Cards" />
            </div>  
        );
    }
}

export default BoxContainer;