import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import store from "../src/redux/store";
import { history } from "./../src/components/History";

const ProviderWrapper = ({ children }) => {
    return (
        <Provider store={store}>
            <Router history={history}>{children}</Router>
        </Provider>
    );
};

const customRender = (ui, options) =>
    render(ui, { wrapper: ProviderWrapper, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
