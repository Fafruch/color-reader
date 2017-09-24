import { connect } from 'react-redux';

import ColorBox from '../components/ColorBox';
import checkColor from '../utils/checkColor';

const mapStateToProps = state => ({
  color: state.color.userColor,
  isColorCorrect: checkColor(state.color.userColor) !== 'No such color',
});

export default connect(mapStateToProps)(ColorBox);
