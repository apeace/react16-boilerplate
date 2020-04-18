/**
 * main.tsx is the entry point of the app. It mounts a React component
 * into the DOM. The initial HTML is in index.html (in this same directory).
 */
import * as React from "react"
import * as ReactDOM from "react-dom"

import { Hello } from "./components/Hello"

ReactDOM.render(
    <Hello compiler="TypeScript" framework="Reactrt" />,
    document.getElementById("example")
)
