import React from 'react';
import PropTypes from 'prop-types';

const ColorBox = ({ color, isColorCorrect }) => {
  if (isColorCorrect) {
    return <div className="ColorBox" style={{ background: color }} />;
  }
  return (
    <div className="ColorBox">
      <div className="ColorBox-text-wrapper">
        ?
      </div>
    </div>
  );
};
ColorBox.propTypes = {
  color: PropTypes.string.isRequired,
  isColorCorrect: PropTypes.bool.isRequired,
};


export default ColorBox;
