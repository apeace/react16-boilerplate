/**
 * main.tsx is the entry point of the app. It mounts a React component
 * into the DOM.
 */
import * as React from "react"
import * as ReactDOM from "react-dom"

import { Hello } from "./components/Hello"

ReactDOM.render(
    <Hello compiler="TypeScript" framework="Reacttttt" />,
    document.getElementById("example")
)
