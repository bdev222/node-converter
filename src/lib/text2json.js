const re = /(\w+):/g;
const replaceAllInvalidTokens = /['’]/g;
const removeExtraComma = /,[\n\s]*\}/g;

const convertTextToJsonObject = (str) => {
  return str
    .replace(re, '"$1":')
    .replace(replaceAllInvalidTokens, '"')
    .replace(removeExtraComma, "}");
};

const text2json = (str) => {
  const jsonBody = convertTextToJsonObject(str);
  try {
    return JSON.parse(jsonBody);
  } catch (err) {
    throw new Error("Can't parse the text to json.");
  }
};

export default text2json;
