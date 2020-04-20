import * as React from "react"
import { render } from "react-dom"
import { expect } from "chai"

import { Hello } from "./Hello"

describe("Hello", () => {
    it("Mounts", () => {
        const container = document.createElement("div")
        document.body.appendChild(container)
        render(<Hello compiler="Foo" framework="Bar" />, container)
        expect(container.textContent).eql("Hello from Foo and Bar!")
    })
})
