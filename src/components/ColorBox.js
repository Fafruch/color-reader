import React from 'react';
import PropTypes from 'prop-types';

const ColorBox = ({ rgbColor, isColorCorrect }) => {
  if (isColorCorrect) {
    return <div className="ColorBox" style={{ background: rgbColor }} />;
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
  rgbColor: PropTypes.string.isRequired,
  isColorCorrect: PropTypes.bool.isRequired,
};


export default ColorBox;
