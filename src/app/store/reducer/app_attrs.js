import { TOGGLE_SIDENAV, CONNECTION_ESTALISHED, CONNECTION_LOST, GATE_CONNECTION_ESTALISHED, GATE_CONNECTION_LOST, START_INITIAL_PROCESS, FINISH_INITIAL_PROCESS } from "../constant/app_attrs"

const initialState = {
  sidenav: false,
  connected: true,
  lost_connections: [],
  initial_loading_active: true,
}

export const app_attrs = (state = initialState, { type, payload }) => {
  switch (type) {

    case TOGGLE_SIDENAV:
      return {
        ...state,
        sidenav: !state.sidenav
      }

    case CONNECTION_ESTALISHED:
      return {
        ...state,
        connected: true
      }

    case CONNECTION_LOST:
      return {
        ...state,
        connected: false
      }

    case GATE_CONNECTION_ESTALISHED:
      return {
        ...state,
        lost_connections: state.lost_connections.filter(item => item !== payload)
      }

    case GATE_CONNECTION_LOST:
      if (state.lost_connections.includes(payload)) {
        return state;
      }

      return {
        ...state,
        lost_connections: [
          ...state.lost_connections,
          payload
        ]
      }

    case START_INITIAL_PROCESS:
      return {
        ...state,
        initial_loading_active: true
      }

    case FINISH_INITIAL_PROCESS:
      return {
        ...state,
        initial_loading_active: false
      }
    default:
      return state
  }
}
