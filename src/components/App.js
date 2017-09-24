import React from 'react';
import PropTypes from 'prop-types';

import InputContainer from '../containers/InputContainer';
import ColorBoxContainer from '../containers/ColorBoxContainer';
import ColorsContainer from '../containers/ColorsContainer';

const App = ({ rgbColor, isColorCorrect }) => (
  <div className="App" style={{ background: isColorCorrect ? rgbColor : 'white' }}>
    <div className="App-header">
      <h1>Color reader</h1>
      <h3>See & convert your HEX / RGB / HSL color</h3>
    </div>
    <div className="Input-container">
      <InputContainer />
    </div>
    <div className="ColorBox-container">
      <ColorBoxContainer />
    </div>
    <div className="Colors-container">
      <ColorsContainer />
    </div>
  </div>
);
App.propTypes = {
  rgbColor: PropTypes.string.isRequired,
  isColorCorrect: PropTypes.bool.isRequired,
};

export default App;
