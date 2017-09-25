import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Colors from '../components/Colors';
import { saveLastCopied } from '../actions/index';

const mapStateToProps = state => ({
  colorTypes: [
    { name: 'HEX', value: state.color.hex },
    { name: 'RGB', value: state.color.rgb },
    { name: 'HSL', value: state.color.hsl },
  ],
  isColorCorrect: state.color.isCorrect,
  lastCopied: state.lastCopied,
});

const mapDispatchToProps = dispatch => ({
  onCopy: bindActionCreators(saveLastCopied, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Colors);
