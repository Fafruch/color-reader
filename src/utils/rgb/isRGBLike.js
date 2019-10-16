const isRGBLike = (string) => {
  // based on RGB regex check from '../colorMatchers/isRGB',
  // it accepts values like '101    102   103'
  // (with '\s' or '\t' chars between) as valid RGB-like strings
  return /^(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),?(\s|\t)*(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),?(\s|\t)*(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)(\s|\t)*$/i.test(string)
};

export default isRGBLike;
