// # CSS
import "../styles/index.scss";

// # JS

// ## Import
import getProperties from "../properties/getProperties";
import isPrint from "./modules/isPrint";
let properties = getProperties();

// ## Output
document.getElementById("output").innerHTML = isPrint(
  properties.global.quijote,
  "MACNHA",
  "NOMBRE"
);
