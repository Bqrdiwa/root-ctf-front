import { useRef } from "react";
import { useCombinedRefs } from "./useCombinedRefs";

export const useForwardingRef = (ref) => {

  const innerRef = useRef(null);
  const combinedRef = useCombinedRefs(ref, innerRef);

  return [combinedRef];
}