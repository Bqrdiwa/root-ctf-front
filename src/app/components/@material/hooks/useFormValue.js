import { useCallback, useState, useEffect, useRef } from 'react';

export const useFormValue = (initial = {}, holeChange = false) => {

  const [Values, setValues] = useState(initial);
  const [change, setchange] = useState(false);
  const protectState = useRef(false);

  const handleFromChange = useCallback(
    // arg1 is commonly name but not always if hole change is true name is new values
    // arg2 is always the value
    (arg1, arg2) => {
      if (holeChange) {
        setValues(arg1);
      } else {
        setValues((prevValue) => ({ ...prevValue, [arg1]: arg2 }));
      }
      setchange(true);
    },
    [holeChange],
  );

  useEffect(() => {
    if (protectState.current) {
      setchange(false);
    }
  }, [change])

  useEffect(() => {
    protectState.current = true;
    return () => {
      protectState.current = false;
    };
  }, [])

  return [Values, handleFromChange, change];
}