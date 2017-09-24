import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = state => ({
  rgbColor: state.color.rgb,
  isColorCorrect: state.color.isCorrect,
});

export default connect(mapStateToProps)(App);
