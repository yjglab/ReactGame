import React from "react";
import ReactDOM from "react-dom/client";

import Tictactoe from "./Tictactoe";

const rootNode = document.querySelector("#root");
ReactDOM.createRoot(rootNode).render(
  <React.StrictMode>
    <Tictactoe />
  </React.StrictMode>
);
