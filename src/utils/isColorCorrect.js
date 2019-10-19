import isHex from './colorMatchers/isHex';
import isHSL from './colorMatchers/isHSL';
import isRGB from './colorMatchers/isRGB';

const isColorCorrect = (color) => {
  switch (true) {
    case isHex(color):
      return true;
    case isRGB(color):
      return true;
    case isHSL(color):
      return true;
    default:
      return false;
  }
};

export default isColorCorrect;
