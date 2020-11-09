# Use json like file.properties behavior in your translations

## How to use?

**1. TRANSLATE: Right format of a json**

```
{
  "welcome": "<h1>Welcome to the real {0}<h1>",
  "main": "<p>Wake up, {0}...</p><p>{1} has you...</p>"
}
```

**2. UPDATE: the import of the json and languages in properties.js**

```
// UPDATE IMPORTS
import { default as en } from "./en.json";
import { default as es } from "./es.json";

// UPDATE LANGUAGES
const properties = {
  lang: function () {
    const array = ["es", "en"];
    const browserLang = navigator.language.toLowerCase();
    array.forEach((str) => {
      if (browserLang.indexOf(str) !== -1) {
        return str;
      }
    });
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
      case "HERRE_LOWERCASE_STR":
        return HERE_JSON_VARIABLE_IMPORTED;
        break;
      ...
```

_the language is selected automaticly by browser propertie navigator.language_

**3. USE**

_3.1. Get properties_

```
// ## Import
import properties from "../properties/properties";
```

_3.2. set properties_

the _first paramenter_ is the string/propertie str and the _other parameters_ are the strings that will be replace sorted by {0}, {1}... pattern

```
import properties from "../properties/properties";
const txt = properties.get();

properties.set(
  txt.main,
  "Neo",
  "Matix"
);
```

---

## Installation and Features

```
// INSTALL
npm install

// Start Dev Server
npm start

// Build Prod Version
npm run build
```

- ES6 Support via [babel](https://babeljs.io/) (v7)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
