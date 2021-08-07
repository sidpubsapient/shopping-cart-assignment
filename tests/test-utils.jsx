import React from "react"
import { render } from "@testing-library/react";
import { Provider } from "react-redux"
import { BrowserRouter as Router } from "react-router-dom";
import store from "../src/redux/store";

const ProviderWrapper = ({ children }) => {
    return (
        <Provider store={store}><Router>{children}</Router></Provider>
    )
}

const customRender = (ui, options) =>
    render(ui, { wrapper: ProviderWrapper, ...options })

// re-export everything
export * from "@testing-library/react"

// override render method
export { customRender as render }