import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ color, onChange }) => (
  <div className="Input">
    <h3>Enter a color</h3>
    <input
      value={color}
      onChange={event => onChange(event.target.value)}
    />
  </div>
);
Input.propTypes = {
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
