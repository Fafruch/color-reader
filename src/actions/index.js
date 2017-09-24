import convert from 'css-color-converter';

import { UPDATE_COLOR } from '../constants/index';
import isColorCorrect from '../utils/isColorCorrect';

export const changeColor = (newColor) => {
  // Remove spaces from string
  const color = newColor.replace(/\s/g, '');
  if (isColorCorrect(color)) {
    return {
      type: UPDATE_COLOR,
      payload: {
        newColor: {
          isCorrect: true,
          input: newColor,
          hex: convert(color).toHexString(),
          rgb: convert(color).toRgbString(),
          hsl: convert(color).toHslString(),
        },
      },
    };
  }
  return {
    type: UPDATE_COLOR,
    payload: {
      newColor: {
        isCorrect: false,
        input: newColor,
        hex: '',
        rgb: '',
        hsl: '',
      },
    },
  };
};
