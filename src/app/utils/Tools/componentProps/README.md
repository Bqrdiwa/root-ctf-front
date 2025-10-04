# Component Props Guid for developers

### `classNameMerge`

#### Parameters

- **propNames**: First you need a array of strings to send to the function as first paramerter.

  Highly recommended to include "className" in this array.

  ```js
  const propNames = [
    "alignItems",
    "order",
    "className"
  ] 
    ```

- **props**: An object with containing items with same keys in propNames (or anything else). generally will be the component income props.

  Props should be something like this

  ```js
  {
    alignItems: "center",
    children: [Object object]
    style: {
      border: "1px solid #000"
    },
    ...
  }
  ```

- **initial**: A string that other extracted classes from props will append to its end. this parameter is optional an if not send to function the param will be a empty string

  For example if we use this function to create className for `Flex` component the initial may be somthing like `"flex"`

#### How To Call it



  ```js
    const [className, otherProps] = classNameMerge(
      propNames, props, "flex"
    );
  ```

#### Output

The output will be an array with two item:

  1. First one is merged classNames that extracted from `props` depends on `propNames`. It is a string value that can directly palce in className property on rendered component

  2. Second item is exaclty the sent `props` object. but the `propNames` has excluded from original sent `props`;

#### Example

  ```js
  const propNames = [
    "justifyItems",
    "justifyContent",
    "alignItems",
    "alignContent",
    "direction",
    "wrap",
    "className",
  ];

  // exmaple created component
  const FlexContainer = (props) => {

    const [className, otherProps] = classNameMerge(propNames, props, "flexContainer");

    console.log(props);
    /**
     * output:
     *  {
     *    justifyItem: "center",
     *    direction: "center",
     *    className: "px-3 bg-danger",
     *    styles: {border: "1px solid #000"},
     *    children: [Object object],
     *    dir: "rtl"
     *  }
     */

    console.log(className);
    /**
     * output:
     *  "flexContainer justifyItems-center direction-center px-3 bg-danger"
     */


    console.log(otherProps);
    /**
     * output:
     *  {
     *    styles: {border: "1px solid #000"},
     *    children: [Object object],
     *    dir: "rtl"
     *  }
     */

    return (
      <div {...otherProps} className={className} />
    )

  };

  const TestFlex = (
    <FlexContainer
      justifyItems="center"
      direction="center"
      className="px-3 bg-danger"
      styles={{
        border: "1px solid #000"
      }}
      dir="rtl"
    >
      <h1>Hello Wolrd!</h1>
    </FlexContainer>
  )

  ```

the out put of the part of code :

  `html` out put:

  ```js
    <div class="flexContainer justifyItems-center direction-center px-3 bg-danger" dir="rtl" style="border: 1px solid #000;"
    >
      <h1>Hello World!</h1>
    </div>

  ```
