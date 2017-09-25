import { SAVE_LAST_COPIED } from '../../constants/index';

const INITIAL_STATE = '';

const lastCopied = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SAVE_LAST_COPIED:
      return action.payload.copied;
    default:
      return state;
  }
};

export default lastCopied;
