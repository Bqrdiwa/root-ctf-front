import { CHANGE_LANGUAGE, LanguageNameInStorage } from "../constant/language";
import { get_language } from "../action/language";

const initialState = get_language(localStorage[LanguageNameInStorage]);

export const language = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LANGUAGE:
      return {
        ...state,
        ...payload
      }
    default:
      return state
  }
}

export default language;