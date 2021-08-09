import React from "react";
import { render, fireEvent } from "../../../tests/test-utils";
import Header from "./index";

describe("Cart actions from header", () => {
    it("should open cart", () => {
        const { getByTestId, queryByTestId, container } = render(<Header />);
        const cartButton = getByTestId("open-cart-button");

        expect(queryByTestId("close-cart-button")).toBeNull();
        fireEvent.click(cartButton);
        expect(container.firstChild.classList.contains("overlay")).toBe(true); //overlay class gets added on opening of cart
    });

    it("should close cart", () => {
        const { getByTestId, container } = render(<Header />);
        const cartButton = getByTestId("open-cart-button");

        fireEvent.click(cartButton);
        expect(container.firstChild.classList.contains("overlay")).toBe(false); //overlay class gets added on opening of cart
    });
});
