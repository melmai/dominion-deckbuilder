import React, { Component } from 'react';
import { dominion } from './config/checkboxes';
import Checkbox from './basic/Checkbox';

class Filter extends Component {
    // PROPS: boxes, cards, 
    constructor(props) {
        super(props);
        
        this.state = {
            checked: new Map()
        }
        
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
    

    handleCheckboxChange(event) {
        const target = event.target;
        const name = target.name;
        const isChecked = target.checked;
        this.setState(prevState => ({ checked: prevState.checked.set(name, isChecked) }));

        //this.props.toggleCheckbox(name);
/*         this.setState({
            [name]: value
        });
    }
 */    

/*     render() {
        return (
            <form className="filter__container">
                <input type="checkbox" name="equalSplit" value={this.props.equalSplit} onChange={this.handleCheckboxChange} /> 
                <label htmlFor="equalSplit">Draw 5 cards from each set</label>
            </form>
        ); */
    }

    render() {
        return (
            <form className="filter__container">
                {dominion.map(item => (
                    <label key={item.key}>
                        <Checkbox name={item.name} checked={this.state.checked.get(item.name)} onChange={this.handleCheckboxChange} />
                        {item.label}
                    </label>
                ))}
            </form>
        );
    }
} 

export default Filter;