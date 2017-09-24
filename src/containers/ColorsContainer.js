import { connect } from 'react-redux';

import Colors from '../components/Colors';

const mapStateToProps = state => ({
  hexColor: state.color.hex,
  rgbColor: state.color.rgb,
  hslColor: state.color.hsl,
  isColorCorrect: state.color.isCorrect,
});

export default connect(mapStateToProps)(Colors);
