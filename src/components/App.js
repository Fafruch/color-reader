import React from 'react';
import PropTypes from 'prop-types';

import InputContainer from '../containers/InputContainer';
import ColorBoxContainer from '../containers/ColorBoxContainer';
import ColorsContainer from '../containers/ColorsContainer';

const App = ({ color }) => (
  <div className="App" style={{ background: color === 'No such color' ? 'white' : color }}>
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
  color: PropTypes.string.isRequired,
};

export default App;
