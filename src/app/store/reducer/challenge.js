import {
  UPLOAD_FLAG_ERROR,
  CLEAR_ERROR_VALIDATION,

} from "../constant/challenge";

const initialState = {
  errorFlag: '',
  errorMsg: [],
}


export const challenge = (state = initialState, { type, payload }) => {
  switch (type) {

    case UPLOAD_FLAG_ERROR:
      return {
        ...state,
        ...payload,
      }

    case CLEAR_ERROR_VALIDATION:
      return {
        ...state,
        errorFlag: null,
        errorMsg: null,
      }


    default:
      return state
  }
}

export default challenge;