import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ type = 'radio', name, checked = false, onChange }) => (
  <input type={type} name={name} checked={checked} onChange={onChange} />
);

Radio.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}

export default Radio;