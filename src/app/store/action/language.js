import typeIs from "../../utils/Tools/typeIs";
import { CHANGE_LANGUAGE, LANGUAGES, LanguageNameInStorage } from "../constant/language";

export const get_language = (language_name) => {

  if (!typeIs(language_name, "String")) {
    localStorage.setItem(LanguageNameInStorage, "en");
    return LANGUAGES.en;
  }

  const lowercased_language_name = language_name.toLowerCase();

  if (!LANGUAGES[lowercased_language_name]) {
    localStorage.setItem(LanguageNameInStorage, "en");
    return LANGUAGES.en;
  }

  localStorage.setItem(LanguageNameInStorage, lowercased_language_name);
  return LANGUAGES[lowercased_language_name];
}

export const change_language = (language_name) => {
  return {
    type: CHANGE_LANGUAGE,
    payload: get_language(language_name)
  }
}