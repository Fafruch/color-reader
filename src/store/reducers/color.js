import { UPDATE_COLOR } from '../../constants/index';

const INITIAL_STATE = {
  isCorrect: false,
  input: '',
  hex: '',
  rgb: '',
  hsl: '',
};

const color = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_COLOR:
      return action.payload.newColor;
    default:
      return state;
  }
};

export default color;
