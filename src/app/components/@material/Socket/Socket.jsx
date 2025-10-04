import { useRef, useEffect, useCallback } from 'react'
import { createSocket } from './createSocket';
import typeIs from '../../../utils/Tools/typeIs';
import { useConnectionReport } from './useConnectionReport';

const isFunction = (callback, ...args) => {
  if (typeIs(callback, "Function")) {
    callback(...args);
  }
}

export const Socket = ({
  url,
  onClose,
  onOpen,
  onMessage,
  onError,
  close,
  ...props
}) => {
  const socket = useRef();
  const { addReport, removeReport } = useConnectionReport(url);

  const handleOnClose = useCallback(
    (...args) => {
      isFunction(onClose, ...args);
      addReport();
    }
    , [addReport, onClose])

  const handleOnOpen = useCallback(
    (...args) => {
      isFunction(onOpen, ...args)
      removeReport();
    }
    , [onOpen, removeReport])

  const handleOnMessage = useCallback(
    (...args) => {
      isFunction(onMessage, ...args);
      removeReport();
    }
    , [onMessage, removeReport])

  const handleOnError = useCallback(
    (...args) => {
      isFunction(onError, ...args);
      addReport();
    }
    , [addReport, onError])

  useEffect(() => {
    if (url) {
      socket.current = createSocket({
        url,
        onClose: handleOnClose,
        onOpen: handleOnOpen,
        onMessage: handleOnMessage,
        onError: handleOnError
      });
    }
  }, [
    handleOnClose,
    handleOnError,
    handleOnMessage,
    handleOnOpen,
    url
  ])

  useEffect(() => {
    return () => {
      if (socket.current) {
        socket.current.close();
        socket.current.onclose = undefined;
      }
    }
  }, [url])

  return null;
}