import { combineReducers } from 'redux';

import color from './reducers/color';
import lastCopied from './reducers/lastCopied';

const makeRootReducer = () => combineReducers({
  color,
  lastCopied,
});


export default makeRootReducer;
