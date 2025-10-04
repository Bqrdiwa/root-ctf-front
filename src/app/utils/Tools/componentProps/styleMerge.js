/**
 * @summary extract specific props from props and add in styles string
 * 
 * @param {Array} propNames array of props that need to extract from sent props
 * @param {Object} props props of the component that should be sent
 * @param {Object} initial predicted style string or somrthing else just strring
 * 
 * @returns {Object} the styles will included in props as a single style item
 */
export const styleMerge = (propNames, { style, ...props }) => {
  try {

    /**
     * Extract merged-styles and remaining-Props that propNames not included in it
     */
    const [mergedstyles, remainingProps] =
      (propNames || []).reduce(
        (accumulator, currentValue) => {

          /**
           * split styles and props from each other 
           */
          const [styles, propsContainer] = accumulator;


          /**
           * check the props to have the target prop
           */
          if (propsContainer[currentValue] !== undefined) {


            /**
             * exclude the target props as `excludeProps` variable from remaining props
             */
            const { [currentValue]: excludedProps, ...otherProps } = propsContainer;

            /**
             * re merge the styles with new excluded related prop to styleName
             */
            return [
              { ...styles, [currentValue]: excludedProps },
              otherProps
            ];
          } else {


            /**
             * do nothing
             */
            return accumulator;
          }
        }
        , [style || {}, props || {}]);

    /**
     * merge styles and remainingProps as a single object
     */
    return {
      style: mergedstyles,
      ...remainingProps
    };

  }
  catch {
    return {};
  }
};

export default styleMerge;