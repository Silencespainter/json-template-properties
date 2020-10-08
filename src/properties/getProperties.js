// UPDATE IMPORTS
import { default as en } from "./es.json";
import { default as es } from "./en.json";
import { default as ar } from "./ar.json";

// UPDATE LANGUAGES
var getProperties = function () {
  const lang = (str) => {
    return navigator.language.toLowerCase().indexOf(str) !== -1;
  };

  switch (true) {
    case lang("en"):
      return en;
      break;
    case lang("es"):
      return es;
      break;
    case lang("ar"):
      return ar;
      break;
    default:
      return en;
      break;
  }
};

export default getProperties;
