import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ name, value, label, selected = false, onChange }) => (
    <React.Fragment>
        <input type="radio" id={`${value}${name}`} name={name} value={value} selected={selected} onChange={(e) => onChange(e, value)} />
        <label htmlFor={`${value}${name}`}>{label}</label>
    </React.Fragment>
);

Radio.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Radio;