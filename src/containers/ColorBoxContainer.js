import { connect } from 'react-redux';

import ColorBox from '../components/ColorBox';

const mapStateToProps = state => ({
  rgbColor: state.color.rgb,
  isColorCorrect: state.color.isCorrect,
});

export default connect(mapStateToProps)(ColorBox);
