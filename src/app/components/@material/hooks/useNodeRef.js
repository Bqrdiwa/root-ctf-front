import { useCallback, useRef } from "react";

export const useNodeRef = () => {

  const ref = useRef(null)

  const setref = useCallback(
    node => {
      ref.current = node;
    },
    [],
  )

  return [ref, setref];

}