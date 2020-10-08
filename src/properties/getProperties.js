// UPDATE IMPORTS
import { default as en } from "./es.json";
import { default as es } from "./en.json";
import { default as ar } from "./ar.json";

// UPDATE LANGUAGES
var getProperties = function () {
  const lang = navigator.language.toLowerCase();
  switch (lang) {
    case "en":
      return en;
      break;
    case "es":
      return es;
      break;
    case "ar":
      return ar;
      break;
    default:
      return en;
      break;
  }
};

export default getProperties;
