# Use json like file.properties behavior in your translations

## How to use?

**1. TRANSLATE: Right format of a json**

```
  {
    "global": {
      "quijote": "in a place of the {0} whose {1} I don't want to remember"
    },
    "location": {},
    "info": {}
  }
```

**2. UPDATE: the import of the json and languages in getProperties.js**

```
// UPDATE IMPORTS
import { default as en } from "./es.json";
import { default as es } from "./en.json";
import { default as ar } from "./ar.json";
...

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
	...

```

_the language is selected automaticly by browser propertie navigator.language_

**3. USE**

**3.1. import the getProperties**

```
// ## Import
import getProperties from "../properties/getProperties";
import isPrint from "./modules/isPrint";
let properties = getProperties();
```

**3.1. import isPrint Module**

the _first paramenter_ is the string/propertie str and the _other parameters_ are the strings that will be replace sorted by {0}, {1}... pattern

```
isPrint(
  properties.global.quijote,
  "MACNHA",
  "NOMBRE"
);
```

# Installation

## Install

```
npm install
```

## Start Dev Server

```
npm start
```

## Build Prod Version

```
npm run build
```

## Features:

- ES6 Support via [babel](https://babeljs.io/) (v7)
- SASS Support via [sass-loader](https://github.com/jtangelder/sass-loader)
- Linting via [eslint-loader](https://github.com/MoOx/eslint-loader)

When you run `npm run build` we use the [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin) to move the css to a separate file. The css file gets included in the head of the `index.html`.
