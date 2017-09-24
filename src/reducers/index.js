import { UPDATE_COLOR } from '../constants/index';

const INITIAL_STATE = {
  color: {
    isColorCorrect: false,
    userColor: '',
    hex: '',
    rgb: '',
    hsl: '',
  },
};

const color = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return { ...state, color: action.payload.newColor };
    default:
      return state;
  }
};

export default color;
