import { connect } from 'react-redux';

import App from '../components/App';

const mapStateToProps = state => ({
  color: state.color.userColor,
});

export default connect(mapStateToProps)(App);
