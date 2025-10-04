import { useCallback } from 'react';
import typeIs from '../../../utils/Tools/typeIs';

export const useHandleChange = (name, callback, { extention, data = undefined, isFile = false } = {}) => {

  const invoker = useCallback(
    (event) => {

      let value = (event.target && !isFile) ? event.target.value : event;
      value = (isFile) ? event.target : value;
      value = (data === undefined) ? value : { value, data };


      if (typeIs(extention, "Function")) {
        callback(name, { value, ...extention({ event, value }) })
      } else {
        callback(name, value)
      }

    },
    [callback, name],
  );

  return invoker;
};
