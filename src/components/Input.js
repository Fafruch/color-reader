import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ inputColor, onChange }) => (
  <div>
    <span className="Input-header">Enter a color</span> <br />
    <input
      className="Input"
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
