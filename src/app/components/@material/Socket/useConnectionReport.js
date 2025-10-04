import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useCallback } from "react";
import { connection_lost, connection_estalished, gate_connection_estalished, gate_connection_lost } from "../../../store/action/app_attrs";

export const useConnectionReport = (connetcion_id) => {
  const dispatch = useDispatch();

  const addReport = useCallback(
    () => dispatch(gate_connection_lost(connetcion_id)),
    [connetcion_id, dispatch],
  )

  const removeReport = useCallback(
    () => dispatch(gate_connection_estalished(connetcion_id)),
    [connetcion_id, dispatch],
  )

  useEffect(() => {
    return () => {
      removeReport();
    }
  }, [removeReport])

  return {
    addReport,
    removeReport
  }
}
