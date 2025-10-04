
/**
 * @summary check the items types
 * 
 * @param {any} item , item to check the type
 * @param {Array | String} types , types that will return true
 * 
 * @returns {boolean} result of type check
 */
export const typeIs = (item, types) => {
  try {

    if (!types) {
      return item.constructor.name;
    }

    const itemType = item.constructor.name;

    return (
      (types.constructor.name === 'Array' && types.includes(itemType)) ||
      (types.constructor.name === 'String' && itemType === types) ||
      false
    );
  } catch (error) {
    return false;
  }
};

export default typeIs;
