import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import configureStore from "./redux/reducers/configureStore";
import { Provider } from "react-redux";
import { setAuthorizationToken } from "./helpers/setAuthToken";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

axios.defaults.baseURL = "https://localhost:44359/api";

const jwtToken = localStorage.getItem("jwtToken");
if (jwtToken) {
  setAuthorizationToken(jwtToken);
}
const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
