import React, { Component } from 'react';
import PropTypes from 'prop-types';

const placeholders = [
  '#f83d32', 'rgb(10, 255, 213)', 'rgb(148, 259, 3)', 'hsl(39, 77%, 48%)',
  'hsl(231, 20%, 43%)', 'hsl(0, 90%, 81%)', '#3fa1fb',
];

class Input extends Component {
  state = {
    setInternalIndex: 0,
    currentPlaceholderIndex: 0,
    activePlaceholder: true,
  };
  componentDidMount() {
    this.setupInterval();
  }
  componentWillUnmount() {
    clearInterval(this.state.setInternalIndex);
  }
  getNewIndex = () => {
    // enter CSS transition is 1000 (but has no impact on interval)
    this.setState({ activePlaceholder: true });
    // exit CSS transition is 1000
    setTimeout(() => this.setState({ activePlaceholder: false }), 2000);
    // 2000 + 1000 = 3000 total time
    // Index changes when not visible, so on class .Input-not-active
    this.setState({
      currentPlaceholderIndex: (this.state.currentPlaceholderIndex + 1) % placeholders.length,
    });
  };
  setupInterval = () => {
    // On launch, for first placeholder
    setTimeout(() => this.setState({ activePlaceholder: false }), 2000);
    // 500 not active (when interval is 3500)
    this.setState({ setInternalIndex: setInterval(this.getNewIndex, 3500) });
  };
  render() {
    const { inputColor, onChange } = this.props;
    return (
      <div>
        <span className="Input-header">Enter a color</span> <br />
        <input
          className={this.state.activePlaceholder ? 'Input-active' : 'Input-not-active'}
          placeholder={placeholders[this.state.currentPlaceholderIndex]}
          value={inputColor}
          onChange={event => onChange(event.target.value)}
        />
      </div>
    );
  }
}
Input.propTypes = {
  inputColor: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
