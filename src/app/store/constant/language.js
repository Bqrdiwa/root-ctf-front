import FA_LANG from "./Translates/fa";
import EN_LANG from "./Translates/en";
import { LANGUAGE } from "./locaStorageNames";

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const LanguageNameInStorage = LANGUAGE;

export const LANGUAGES = {

  "fa": {
    name: "فارسی",
    apiTag: "fa",
    attr: {
      rightToLeft: true
    },
    style: {
      direction: "rtl",
      font: "IRANSans",
    },
    trans: FA_LANG
  },

  "en": {
    name: "English",
    apiTag: "",
    attr: {
      rightToLeft: false
    },
    style: {
      direction: "ltr",
      font: "sans-serif",
    },
    trans: EN_LANG
  }

}