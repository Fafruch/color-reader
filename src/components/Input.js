import React, { Component } from 'react';
import PropTypes from 'prop-types';

const placeholders = [
  'hsl(0, 90%, 81%)', '#f83d32', 'hsl(39, 77%, 48%)', 'rgb(148, 259, 3)',
  'hsl(231, 20%, 43%)', '#3fa1fb', 'rgb(10, 255, 213)',
];

class Input extends Component {
  state = {
    currentPlaceholderIndex: 0,
    isPlaceholderActive: false,
  };
  componentDidMount() {
    // Manually invoke handleTransitionEnd on start (as there's no first transition,
    // but we need to start it up)
    this.handleTransitionEnd();
  }
  // This function is invoked two times for every placeholder - on appearing and disappearing
  handleTransitionEnd = () => {
    if (!this.state.isPlaceholderActive) this.generateNewPlaceholder();
    else this.waitWithPlaceholder();
  };
  // First time it waits some time, generates new placeholder's index,
  // and changes input's class from 'Input-not-active' to 'Input-active'
  generateNewPlaceholder = () => setTimeout(() => this.setState({
    currentPlaceholderIndex: (this.state.currentPlaceholderIndex + 1) % placeholders.length,
    isPlaceholderActive: true,
  }), 500);
  // Second time, when the first handleTransitionEnd finishes, it waits on a screen
  // being visible by user and then changes input's class from 'Input-active' to 'Input-not-active'
  waitWithPlaceholder = () => setTimeout(() => this.setState({ isPlaceholderActive: false }), 2000);
  render() {
    const { inputColor, onChange } = this.props;
    const { currentPlaceholderIndex, isPlaceholderActive } = this.state;
    return (
      <div>
        <span className="Input-header">Enter a color</span> <br />
        <input
          className={isPlaceholderActive ? 'Input-active' : 'Input-not-active'}
          placeholder={placeholders[currentPlaceholderIndex]}
          value={inputColor}
          onChange={event => onChange(event.target.value)}
          onTransitionEnd={this.handleTransitionEnd}
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
