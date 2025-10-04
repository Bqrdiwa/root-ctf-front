import { ACCESS_TOKEN, REFRESH_TOKEN, USER_AVATAR } from "../constant/locaStorageNames";
import { LOGOUT } from "../constant/RoutesAndLink/links";
import {
  UPLOAD_USER_INFO_RESULT,
  UPLOAD_CTF_LOGO,
  UPLOAD_TOKENS,
} from "../constant/user";

const initialState = {
  fieldstwo: [],
  fields: [],
  originalLogo: localStorage[USER_AVATAR],
  refreshToken: localStorage[REFRESH_TOKEN] || '',
  accessToken: localStorage[ACCESS_TOKEN] || '',
  loggedIn: localStorage[ACCESS_TOKEN] ? true : false,
}


export const user = (state = initialState, { type, payload }) => {
  switch (type) {

    case UPLOAD_USER_INFO_RESULT:
      return {
        ...state,
        ...payload,
      }

    case UPLOAD_CTF_LOGO:
      return {
        ...state,
        ...payload,
      }


    case UPLOAD_TOKENS:
      return {
        ...state,
        ...payload,
      }

    case LOGOUT:
      return {
        ...state,
        fieldstwo: [],
        fields: [],
        originalLogo: '',
        refreshToken: '',
        accessToken: '',
        loggedIn: false,
      }

    default:
      return state
  }
}

export default user;