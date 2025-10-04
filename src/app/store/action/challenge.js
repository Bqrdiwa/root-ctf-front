import {
  UPLOAD_FLAG_ERROR,
  CLEAR_ERROR_VALIDATION,
} from "../constant/challenge";

export const upload_flag_error = ({
  errorFlag,
  errorMsg,
}) => ({
  type: UPLOAD_FLAG_ERROR,
  payload: {
    errorFlag,
    errorMsg,
  }
});

export const ClearErrorValidation = () => {
  return {
    type: CLEAR_ERROR_VALIDATION
  }
};




