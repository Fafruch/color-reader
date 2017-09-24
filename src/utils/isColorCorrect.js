const isColorCorrect = (color) => {
  // Note: RGB and HSL regular expressions come from: https://gist.github.com/sethlopezme/d072b945969a3cc2cc11
  switch (true) {
    // HEX
    case /^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(color):
      return true;
    // RGB
    case /^rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)$/.test(color):
      return true;
    // HSL
    case /^hsl\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%\)$/.test(color):
      return true;
    default:
      return false;
  }
};

export default isColorCorrect;
