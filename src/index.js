import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const domeNode = document.createElement('div');
const root = ReactDOM.createRoot(domeNode);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
document.body.appendChild(domeNode);