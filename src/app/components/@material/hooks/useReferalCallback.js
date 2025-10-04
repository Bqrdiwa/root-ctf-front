import { useCallback } from 'react';

export const useReferalCallback = (callback) => {

  return useCallback(
    callback,
    [callback],
  )
}
