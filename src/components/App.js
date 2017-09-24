import React from 'react';
import PropTypes from 'prop-types';

import InputContainer from '../containers/InputContainer';
import ColorBoxContainer from '../containers/ColorBoxContainer';
import ColorsContainer from '../containers/ColorsContainer';
import Footer from '../components/Footer';

const App = ({ rgbColor, isColorCorrect }) => (
  <div className="App" style={{ background: isColorCorrect ? rgbColor : 'white' }}>
    <div className="App-header">
      <h1>Color reader</h1>
      <h3>See & convert your <br /> HEX / RGB / HSL color</h3>
      <div className="Input-container">
        <InputContainer />
      </div>
    </div>
    <div className="ColorBox-container">
      <ColorBoxContainer />
    </div>
    <div className="Colors-container">
      <ColorsContainer />
    </div>
    <Footer />
  </div>
);
App.propTypes = {
  rgbColor: PropTypes.string.isRequired,
  isColorCorrect: PropTypes.bool.isRequired,
};

export default App;
