import React from "react";
import ReactDOM from "react-dom/client";

import Mine from "./Mine";

const rootNode = document.querySelector("#root");
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <Mine />
  </React.StrictMode>
);
