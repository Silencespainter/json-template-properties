// # CSS
import "../styles/index.scss";

// # JS

// ## Import
import properties from "../properties/properties";
const txt = properties.get();
const year = new Date().getFullYear();

document.getElementById("main").innerHTML = `
  <header>${properties.set(txt.main, "Neo", "Matrix")}</header>
  <main>${properties.set(txt.welcome, "🌍")}

    <p>
      <a href="https://github.com/Silencespainter/json-template-properties">${properties.set(
        txt.backRepo
      )}
      <small>Powered by ${properties.set(
        txt.author,
        "Nando Muñoz"
      )}, ${year} </small>
      </a>
    </p>
    </main> 
`;
