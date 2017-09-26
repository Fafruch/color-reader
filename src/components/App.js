import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import InputContainer from '../containers/InputContainer';
import ColorBoxContainer from '../containers/ColorBoxContainer';
import ColorsContainer from '../containers/ColorsContainer';
import Footer from '../components/Footer';

const App = ({ rgbColor, isColorCorrect }) => (
  <div className="App" style={{ background: isColorCorrect ? rgbColor : 'white' }}>
    <div className="App-header">
      <Header />
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
