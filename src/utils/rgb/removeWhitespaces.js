const removeWhitespaces = (string) => {
  return string
    .split('\t')
    .join(' ')
    .split(' ')
    .filter((s) => !!s)
    .join(' ');
};

export default removeWhitespaces;
