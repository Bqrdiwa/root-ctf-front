import typeIs from "./typeIs";

/**
 * targetting the extra spaces from a classname string
 */
const REGEXP_TRIM = /\s+/g;

/**
 * @summary extract specific props from props and add in classnames string
 * 
 * @param {Array} propNames array of props that need to extract from sent props
 * @param {Object} props props of the component that should be sent
 * @param {String} initial predicted classname string or somrthing else just strring
 * 
 * @returns {Array}
 *  an array with two item 
 *    - first item: merged classNames
 *    - second item: props exclude propNames
 */
export const classNameMerge = (propNames, props, initial) => {
  try {

    /**
     * Extract merged-classes and remaining-Props that propNames not included in it
     */
    const [mergedClasses, remainingProps] =
      (propNames || []).reduce(
        (accumulator, currentValue) => {


          /**
           * split classnames and props from each other 
           */
          const [classNames, propsContainer] = accumulator;


          /**
           * check the props to have the target prop
           */
          if (propsContainer[currentValue]) {


            /**
             * exclude the target props as `excludeProps` variable from remaining props
             */
            const { [currentValue]: excludedProps, ...otherProps } = propsContainer;


            if (currentValue === "className")
              return [
                `${classNames} ${excludedProps}`,
                otherProps
              ];
            /**
             * re merge the classnames with new excluded related prop to classname
             */
            return [
              `${classNames} ${currentValue}${(
                // if the excludedProps is not boolean the propsName value will be add an a className
                !typeIs(excludedProps, ["Boolean"])
                  ? `-${excludedProps}` : ""
              )} `,
              otherProps
            ];
          } else {


            /**
             * do nothing
             */
            return accumulator;
          }
        }
        , [initial || "", props || {}]);

    /**
     * Trim the white spaces in classNames before return the result
     */
    return [
      mergedClasses.replace(REGEXP_TRIM, " ").trim(),
      remainingProps
    ];

  }
  catch {
    return undefined;
  }
};

export default classNameMerge;