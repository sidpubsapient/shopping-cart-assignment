import React from "react"
import {render} from "@testing-library/react"
import Footer from "./index"
 
it("should take a snapshot", () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment(<Footer />)).toMatchSnapshot()
})