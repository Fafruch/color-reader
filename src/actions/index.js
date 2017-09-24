import { UPDATE_COLOR } from '../constants/index';
import checkColor from '../utils/checkColor';

export const changeColor = (newColor) => {
  if (checkColor(newColor)) {
    return {
      type: UPDATE_COLOR,
      payload: {
        newColor: {
          isCorrect: true,
          userColor: newColor,
          hex: '',
          rgb: '',
          hsl: '',
        },
      },
    };
  }
  return {
    type: UPDATE_COLOR,
    payload: {
      newColor: {
        isCorrect: false,
        userColor: newColor,
        hex: null,
        rgb: null,
        hsl: null,
      },
    },
  };
};
