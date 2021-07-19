import React from "react";
// import { render, fireEvent } from "@testing-library/react";
import { render, fireEvent } from "../../../tests/test-utils";
import Header from "./index";
import { Provider } from "react-redux"
import configureStore from "redux-mock-store"
import { BrowserRouter as Router } from "react-router-dom";
import thunk from "redux-thunk";

test("cart handler onClick", () => {
    const initialState = {
        banner: {isLoading: false,
            banners: [],
            isErrored: false,
            errorMsg: ""},
        cart: {
            isLoading: false,
            isErrored: false,
            errorMsg: "",
            cartItems: [],
            cartItemsCount: 0,
            cartTotalPrice: 0,
            isCartOpen: false,
        },
        category: {
            isLoading: false,
            categories: [],
            isErrored: false,
            errorMsg: ""
        },
        prodcut: {
            isLoading: false,
            products: [],
            isErrored: false,
            errorMsg: ""
        }
    }
    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    let store = mockStore(initialState);
    const { getByTestId } = render(<Provider store={store}><Router><Header /></Router></Provider>);
    const button = getByTestId("open-cart-button");
    fireEvent.click(button)
    expect(getByTestId("close-cart-button")).toBeInTheDocument();
})