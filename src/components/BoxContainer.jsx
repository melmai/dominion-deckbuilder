import React, { Component } from 'react';
import Box from './Box';
import Button from './Button';


class BoxContainer extends Component {
    render() {
        return (
            <div className="box-container">
                <div className="boxes">
                    <Box name="Dominion 2nd ed" onClick={ this.props.addBox } />
                    <Box name="Intrigue 2nd ed" onClick={ this.props.addBox } />
                    <Box name="Adventures" onClick={ this.props.addBox } />
                    <Box name="Nocturne" onClick={ this.props.addBox } />
                </div>
                <Button onClick={ (e) => this.props.showBoxCards(e) } value="View Cards" />
            </div>  
        );
    }
}

export default BoxContainer;