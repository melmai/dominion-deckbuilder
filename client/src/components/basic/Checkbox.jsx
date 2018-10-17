import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ type = 'checkbox', name, label, checked = false, onChange }) => (
    <div>    
        <input type={type} id={name} name={name} checked={checked} onChange={onChange} />
        <label for={name}>{label}</label>
    </div>
);

Checkbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Checkbox;