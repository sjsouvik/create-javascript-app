import App from "./App";

const root = document.querySelector("#root");

root.innerHTML = `
    ${App({ name: "create-javascript-app" })}
    <h3>This is a vanilla JS starter to build vanilla JS application with modern tools</h3>
    `;
