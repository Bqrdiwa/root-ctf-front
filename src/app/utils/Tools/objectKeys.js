import typeIs from "./typeIs";

/**
 * 
 * @param {Any} objectOrArray , object to extract its keys
 * 
 * @returns {Array} , array of keys
 */
export function objectKeys(objectOrArray) {

  const keys = [];

  if (typeIs(objectOrArray, ["Object", "Array"])) {
    for (let keyName in objectOrArray) {
      keys.push(keyName);
    }
  }

  return keys;
}