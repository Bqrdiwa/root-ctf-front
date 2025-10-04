import typeIs from "../typeIs";

const DEFAULT_MATCH = /\{[a-z]*[^{}]*\}/is;

/**
 * 
 * @param {String | Array} base 
 * @param {Array} params 
 * @param {Regexp} match
 */
export const injectParamsToStringArray = (base, params = [], match = DEFAULT_MATCH) => {

  const originalParts = base;
  let paramsArray = params || [];
  const partsArray = [];

  if (typeIs(params, "Object")) {
    const paramskeys = Object.keys(params);
    paramsArray = paramskeys.map(key => params[key])
  }

  originalParts.forEach(
    part =>
      partsArray.push(
        match.test(part)
          ? part.replace(match, paramsArray.shift() || "")
          : part
      )
  );

  const result = partsArray;

  return result;
};

export default injectParamsToStringArray;