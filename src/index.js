import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import GlobalStyles from "./store/GlobalStyles.styled";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
