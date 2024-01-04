const getTextTrim = (text, minLength, maxLength) =>
  text.length > maxLength ? text.slice(minLength, maxLength) + "..." : text;
export default getTextTrim;
