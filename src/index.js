import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { history } from "./components/History";

import "./index.scss";
import { App } from "./App.js";

ReactDom.render(
    <React.StrictMode>
        <BrowserRouter history={history}>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("app")
);
