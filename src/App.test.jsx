import React from "react"
import {render} from "../tests/test-utils";
import App from "./App"

describe("Testing App wrapper", () => {
    it("should take a snapshot", () => {
        const { asFragment } = render(<App />);
        expect(asFragment()).toMatchSnapshot()
    })
})