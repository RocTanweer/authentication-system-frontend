import React from "react";
import ReactDOM from "react-dom";
import App from "./component/App";
import GlobalContextProvider from "./store/GlobalContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
