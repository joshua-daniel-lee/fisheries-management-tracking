import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import RootReducer from "./Store/Reducers/RootReducer";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
