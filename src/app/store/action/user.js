import { LOGOUT } from "../constant/RoutesAndLink/links";
import {
  UPLOAD_USER_INFO_RESULT,
  UPLOAD_CTF_LOGO,
  UPLOAD_TOKENS,
} from "../constant/user";

export const upload_user_info_results = ({
  fieldstwo,
  fields,
}) => ({
  type: UPLOAD_USER_INFO_RESULT,
  payload: {
    fieldstwo,
    fields,
  }
});






export const upload_ctf_logo = ({
  originalLogo,
}) => ({
  type: UPLOAD_CTF_LOGO,
  payload: {
    originalLogo,
  }
});



export const upload_Tokens = ({
  accessToken,
  refreshToken,
  loggedIn,
}) => ({
  type: UPLOAD_TOKENS,
  payload: {
    accessToken,
    refreshToken,
    loggedIn,
  }
});

export const logout = () => ({
  type: LOGOUT
})