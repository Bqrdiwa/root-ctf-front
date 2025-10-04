import { objectKeys } from "./objectKeys";

/**
 * 
 * @param {Object} anyObject 
 * @param {String} keyName 
 */
export function convertObjectToArray(anyObject, keyName, mergeWithValue = true) {
  const keys = objectKeys(anyObject);

  const ArrayObject = keys.map(
    key => {

      if (mergeWithValue) {
        return {
          ...anyObject[key],
          [keyName || "object_key"]: key
        }
      } else {
        return {
          value: anyObject[key],
          [keyName || "object_key"]: key
        }
      }

    }
  );

  return ArrayObject;
}