import { useMemo } from "react";
import { classNameMerge } from "../../../utils/Tools/componentProps/classNameMerge";

export const useClassNameMerge = (propNames, props, inital, prefix) => {

  return useMemo(
    () => classNameMerge(propNames, props, inital, prefix)
    , [propNames, props, inital, prefix]
  )
}
