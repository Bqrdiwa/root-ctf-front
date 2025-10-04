import { TOGGLE_SIDENAV, CONNECTION_ESTALISHED, CONNECTION_LOST, GATE_CONNECTION_LOST, GATE_CONNECTION_ESTALISHED, START_INITIAL_PROCESS, FINISH_INITIAL_PROCESS } from "../constant/app_attrs";

export const toggle_sidenav = () => ({
  type: TOGGLE_SIDENAV
})

export const connection_estalished = () => ({
  type: CONNECTION_ESTALISHED
})

export const connection_lost = () => ({
  type: CONNECTION_LOST
})

export const gate_connection_estalished = (connectionId) => ({
  type: GATE_CONNECTION_ESTALISHED,
  payload: connectionId
})

export const gate_connection_lost = (connectionId) => ({
  type: GATE_CONNECTION_LOST,
  payload: connectionId
})

export const start_initial_process = () => ({
  type: START_INITIAL_PROCESS
})

export const finish_initial_process = () => ({
  type: FINISH_INITIAL_PROCESS
})