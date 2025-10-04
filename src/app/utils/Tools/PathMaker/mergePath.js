/**
 * 
 * @param {Array} paths 
 * @param {Array} searchs 
 */
export const mergePath = (paths = [], searchs = []) => {
  try {

    const pathname = `/${paths.join("/")}`;

    const mergedSearches =
      searchs.reduce(
        (accumolator, currentValue) =>
          currentValue
            ? `${accumolator}${currentValue}={${currentValue}}&`
            : accumolator
        , "?");



    const search =
      mergedSearches === "?"
        ? ""
        : mergedSearches;

    return pathname + search;
  }
  catch (error) {
    return "/";
  }
};

export default mergePath;