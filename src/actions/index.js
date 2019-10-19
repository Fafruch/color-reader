import convert from 'css-color-converter';

import { UPDATE_COLOR, SAVE_LAST_COPIED } from '../constants/index';
import isColorCorrect from '../utils/isColorCorrect';
import normalizeColor from '../utils/normalizeColor';

export const changeColor = (newColor) => {
  const color = normalizeColor(newColor);

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

export const saveLastCopied = copied => ({
  type: SAVE_LAST_COPIED,
  payload: {
    copied,
  },
});
