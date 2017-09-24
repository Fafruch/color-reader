const checkColor = (color) => {
  // Remove spaces from string
  const colorWithoutSpaces = color.replace(/\s/g, '');
  // Note: RGB and HSL regular expressions come from: https://gist.github.com/sethlopezme/d072b945969a3cc2cc11
  switch (true) {
    // HEX
    case /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(colorWithoutSpaces):
      return colorWithoutSpaces;
    // RGB
    case /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/.test(colorWithoutSpaces):
      return colorWithoutSpaces;
    // HSL
    case /^hsl\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%\)$/.test(colorWithoutSpaces):
      return colorWithoutSpaces;
    default:
      return 'No such color';
  }
};

export default checkColor;
