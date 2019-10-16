import { compose } from 'recompose';
import removeSpaces from './removeSpaces';
import isRGB from './colorMatchers/isRGB';
import isRGBLike from './rgb/isRGBLike';
import injectCommas from './rgb/injectCommas';
import removeWhitespaces from './rgb/removeWhitespaces';
import wrapWithRGBPrefix from './rgb/wrapWithRGBPrefix';

const normalizeColor = (newColor) => {
  return (isRGBLike(newColor) && !isRGB(newColor))
    ? compose(
      injectCommas,
      wrapWithRGBPrefix,
      removeWhitespaces,
    )(newColor)
    : removeSpaces(newColor);
};

export default normalizeColor;
