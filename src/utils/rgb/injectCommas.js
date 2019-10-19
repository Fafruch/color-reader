const injectCommas = string => string.replace(/\d\s/g, (group) => `${group.slice(0, 1)},`);

export default injectCommas;
