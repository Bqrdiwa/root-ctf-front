import { useEffect, useState, useCallback } from "react";

export const useFire = (reverse = false, timeout = 0) => {

  const [fire, setfire] = useState(reverse ? true : false);
  const push = useCallback(() => setfire(reverse ? false : true), []);

  useEffect(() => {
    setTimeout(
      () => setfire(reverse ? true : false),
      timeout
    )
  }, [fire, reverse, timeout])

  return [fire, push]
}