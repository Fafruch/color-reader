const checkColor = (color) => {
  // Note: RGB and HSL regular expressions come from: https://gist.github.com/sethlopezme/d072b945969a3cc2cc11
  switch (true) {
    // HEX
    case /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color):
      return color;
    // RGB
    case /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/.test(color):
      return color;
    // HSL
    case /^hsl\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%\)$/.test(color):
      return color;
    default:
      return 'No such color';
  }
};

export default checkColor;
