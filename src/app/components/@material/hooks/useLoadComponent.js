import {
  useState,
  useEffect,
  useCallback,
  useRef
} from 'react';
import typeIs from '../../../utils/Tools/typeIs';

export const useLoadComponent = (
  apis = [],
  { params } = {},
  dependencies = []
) => {
  const apiArray = useRef([])
  const safeToChangeState = useRef(true);
  const apiRef = useRef(apis)
  const [responds, setResponds] = useState({})
  const [load, setLoad] = useState(0);

  const thenCallback = useCallback(
    (data) => {
      if (safeToChangeState.current) {
        setResponds((prevResponse) => ({ ...prevResponse, ...data }))
      }
    },
    [safeToChangeState],
  );

  const catchCallback = useCallback(
    (data) => {
      console.log(data);
      if (safeToChangeState.current) {
        setResponds((prevResponse) => ({ ...prevResponse, ...data }))
      }
    },
    [safeToChangeState],
  );

  const finallyCallback = useCallback(
    () => {
      if (safeToChangeState.current) {
        setLoad((preLoad) => preLoad - 1);
      }
    },
    [safeToChangeState],
  );

  useEffect(() => {

    const apisToBeProceed = apiRef.current;

    apisToBeProceed.forEach(api => {
      if (typeIs(api, "Function")) {
        setLoad((preLoad) => preLoad + 1);
        apiArray.current.push(
          api({
            params,
            thenCallback,
            catchCallback,
            finallyCallback
          }).invoke()
        )
      }
    });

    return () => {
      apisToBeProceed.forEach(api => {
        if (typeIs(api.cancel, "Function")) {
          api.cancel();
        }

      });
    };
  }, [JSON.stringify(params), ...dependencies]);

  useEffect(() => {
    safeToChangeState.current = true;
    return () => {
      safeToChangeState.current = false;
    };
  }, [])

  return [responds, load];
};
