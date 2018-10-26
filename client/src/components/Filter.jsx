import React from 'react';
import Checkbox from './basic/Checkbox';
import Radio from './basic/Radio';


const image = name => `img/${name}.svg`;

const FilterCategory = props => {
    if (props.type === "radio") {
        return (
            <section className="filter__category">
                <div className="filter__options">
                    <h2>{props.title}</h2>
                    {props.options.map(item => (
                        <div key={item}>
                            <Radio
                                name={item}
                                value="include"
                                label={`include at least 1 ${item}`}
                                selected={props.selected.get(item)}
                                onChange={props.handleRadioChange}
                            />
                            <Radio
                                name={item}
                                value="exclude"
                                label={`exclude ${item} cards`}
                                selected={props.selected.get(item)}
                                onChange={props.handleRadioChange}
                            />
                            <Radio
                                name={item}
                                value="default"
                                label={`no preference`}
                                selected={props.selected.get(item)}
                                onChange={props.handleRadioChange}
                            />
                        </div>
                    ))}
                </div>
            </section>
        );
    } else {
        return (
            <section className="filter__category">
                <img className="filter__image" src={image(props.img)} alt="" />
                <div className="filter__options">
                    <h2>{props.title}</h2>
                    {props.options.map(item => (
                        <label key={item.key}>
                            <Checkbox
                                name={item.name}
                                label={item.label}
                                checked={props.checked.get(item.name)}
                                onChange={props.handleCheckboxChange}
                            />
                        </label>
                    ))}
                </div>
            </section>
        );
    }
}

const Filter = props => ( // PROPS: boxes, options, checked, handleCheckboxChange()
    <form className="filter__container">
        <section className="filter__container--section">
            <FilterCategory
                title="Basic Abilities"
                img="settings"
                options={props.abilities}
                checked={props.checked}
                handleCheckboxChange={props.handleCheckboxChange} />
            <FilterCategory
                title="Curses"
                img="curse"
                options={props.curse}
                checked={props.checked}
                handleCheckboxChange={props.handleCheckboxChange} />
            <FilterCategory
                title="Attack/Reaction"
                img="reaction"
                options={props.reaction}
                checked={props.checked}
                handleCheckboxChange={props.handleCheckboxChange} />
        </section>
        <section className="filter__container--section">
            <FilterCategory 
                title="Card Types" 
                options={props.types} 
                selected={props.selected} 
                type="radio"
                handleRadioChange={props.handleRadioChange} /> 
        </section>
    </form>
);

export default Filter;