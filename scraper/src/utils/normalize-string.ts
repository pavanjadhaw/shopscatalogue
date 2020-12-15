const normalizeString = (str: string): string =>
  str.toLowerCase().split(' ').join('-');

export default normalizeString;
