import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputColor, onChange }) => (
  <div>
    <h3>Enter a color</h3>
    <input
      value={inputColor}
      onChange={event => onChange(event.target.value)}
    />
  </div>
);
Input.propTypes = {
  inputColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
