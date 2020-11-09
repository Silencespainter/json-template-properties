// UPDATE IMPORTS
import { default as en } from "./en.json";
import { default as es } from "./es.json";

// UPDATE LANGUAGES
const properties = {
  lang: function () {
    let result;
    const array = ["es", "en"];
    array.forEach((str) => {
      navigator.language.toLowerCase().indexOf(str) !== -1
        ? (result = str)
        : undefined;
    });
    return result;
  },
  get: () => {
    const lang = properties.lang();
    switch (lang) {
      case "en":
        return en;
        break;
      case "es":
        return es;
        break;
      default:
        return en;
        break;
    }
  },
  /**
   * Replace in str the pattern {0} for each item of params
   * @param {string} str
   * @param  {...any} params
   */
  set: (str, ...params) => {
    let result = str;
    params.forEach((item, index) => {
      let rex = "{" + index + "}";
      result = result.replace(rex, item);
    });
    return result;
  },
};

export default properties;
