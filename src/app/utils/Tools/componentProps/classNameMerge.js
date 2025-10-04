import typeIs from "../../../utils/Tools/typeIs";

/**
 * targetting the extra spaces from a classname string
 */
const REGEXP_TRIM = /\s{2,}/g;

/**
 * @summary extract specific props from props and add in classnames string
 * 
 * @param {Array} propNames array of props that need to extract from sent props
 * @param {Object} props props of the component that should be sent
 * @param {String} initial predicted classname string or somrthing else just strring
 * @param {String} prefix any classes added to the system use prefix format
 * 
 * @returns {Array}
 *  an array with two item 
 *    - first item: merged classNames
 *    - second item: props exclude propNames
 */
export const classNameMerge = (propNames, props, initial = "", prefix = "") => {
  try {

    /**
     * exclude className from props and add it in the start of classname
     */
    const { className, ...classExcludedProps } = props;
    const initialClassName = `${initial || ""} ${className || ""}`;

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

          const valueName = currentValue.name || currentValue;
          /**
           * check the props to have the target prop
           */

          const pcv = propsContainer[valueName];

          if (pcv || pcv === false) {

            /**
             * exclude the target props as `excludeProps` variable from remaining props
             */
            const { [valueName]: excludedProps, ...otherProps } = propsContainer;

            if (excludedProps === false) {
              return [accumulator[0], otherProps];
            }

            // if (!excludedProps) {
            //   return [classNames, otherProps];
            // }

            const usingPrefix = (
              currentValue.prefix ||
              typeIs(currentValue.prefix, "String")
            ) ? currentValue.prefix : prefix;

            /**
             * re merge the classnames with new excluded related prop to classname
             */
            return [
              `${classNames} ${(
                // add prefix if requested
                (usingPrefix) ? `${usingPrefix}-` : ""
              )}${valueName}${(
                // if the excludedProps is not boolean the propsName value will be add an a className
                typeIs(excludedProps, ["Boolean"]) ? "" : `-${excludedProps.toLowerCase()}`
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
        , [initialClassName || "", classExcludedProps || {}]);

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