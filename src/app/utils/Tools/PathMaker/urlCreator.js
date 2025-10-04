import { injectParamsToStringArray } from "../PathMaker/InjectParamsToStringArray";

const PARAM_FINDER = /^:[a-z\-_0-9]+/is;
const SEARCH_FINDER = /\{\$[a-z-_]+\}/is;

const ValidateSlash = /\/{2,}/igs;
const ValidateSlashQuestion = /\/\?/igs;
const ValidateSlashHash = /\/#/igs;
const ValidateQuestionHash = /\?#/igs;
const ValidateEqualHash = /=#/igs;
const ValidateEqualAmp = /=&/igs;
const ValidateLastQuestion = /\?$/s;
const ValidateLastEqual = /=$/s;

/**
 * 
 * @param {String} path
 * @param {Array} pathParams
 * @param {Array} searchParams
 * @param {String} hash
 */
export const urlCreator = (path, pathParams = [], searchParams = [], hash = "") => {
  try {

    let result = path;

    const pathname = path.split("?")[0].split("/");
    const search = (path.split("?")[1] || "").split("&");
          
    result =
      [
        injectParamsToStringArray(pathname, pathParams, PARAM_FINDER).join("/"),
        injectParamsToStringArray(search, searchParams, SEARCH_FINDER).join("&")
      ].join("?");

    result = (hash && `${result}#${hash}`) || result;

    result = result.trim();
    result = result.replace(ValidateSlash, "/");
    result = result.replace(ValidateSlashQuestion, "?");
    result = result.replace(ValidateSlashHash, "#");
    result = result.replace(ValidateQuestionHash, "#");
    result = result.replace(ValidateEqualHash, "#");
    result = result.replace(ValidateEqualAmp, "&");
    result = result.replace(ValidateLastQuestion, "");
    result = result.replace(ValidateLastEqual, "");

    return result;
  }
  catch (error) {
    return error;
  }
};

export default urlCreator;