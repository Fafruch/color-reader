import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Input from '../components/Input';
import { changeColor } from '../actions/index';

const mapStateToProps = state => ({
  inputColor: state.color.input,
});

const mapDispatchToProps = dispatch => ({
  onChange: bindActionCreators(changeColor, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Input);
