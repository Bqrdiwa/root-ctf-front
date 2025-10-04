import { useCallback, useState, useEffect, useRef } from 'react';
import typeIs from '../../../utils/Tools/typeIs';

const convertToArray = (values, result = []) => {
  // console.log(values);
  if (typeIs(values, "Array")) {
    return [...result, ...values.map(value => convertToArray(value, result))];
  } else if (typeIs(values, "Object")) {
    return [...result, ...Object.keys(values).map(key => convertToArray(values[key], result))];
  } else {
    return [...result, values];
  }
}

export const useSubmit = (api, values, {
  onSuccess,
  onError,
  params,
} = {}) => {

  const safeToChangeState = useRef(true)
  const [load, setload] = useState(0);
  const [response, setresponse] = useState({});
  const [apiTrack, setapiTrack] = useState(null);

  // then callback
  const thenCallback = useCallback(
    (data) => {

      if (safeToChangeState.current) {
        setresponse({ response: data, submit_success: true });

        if (typeIs(onSuccess, "Function")) {
          onSuccess(data);
        }
      }
    },
    [onSuccess, safeToChangeState],
  );

  // catch callback
  const catchCallback = useCallback(
    (data) => {
      if (safeToChangeState.current) {
        setresponse({ errors: data, submit_success: false });

        if (typeIs(onError, "Function")) {
          onError(data);
        }
      }
    },
    [onError, safeToChangeState],
  );

  // finally callback
  const finallyCallback = useCallback(
    () => {

      if (safeToChangeState.current) {
        setload(0);
      }
    },
    [safeToChangeState],
  );

  const submit = useCallback(
    ({ liveValues = {} } = {}) => {
      if (typeIs(api, "Function")) {

        // run if other instances are done
        if (load !== 0) {
          if (apiTrack) {
            apiTrack.cancel();
          }
        }

        // set load to 1
        setload(1);
        setresponse({});

        // save the api in state to track
        setapiTrack(
          api({
            params,
            data: { ...values, ...liveValues },
            thenCallback,
            catchCallback,
            finallyCallback
          }).invoke()
        );

      }
    },
    [values, api, params, load, thenCallback, catchCallback, finallyCallback],
  );

  useEffect(() => {
    return () => {
      if (apiTrack) {
        apiTrack.cancel();
      }
    };
  }, [apiTrack])

  useEffect(() => {
    return () => {
      safeToChangeState.current = false;
    };
  }, [])

  return [submit, response, load];
}
