/**
 * main.tsx is the entry point of the app. It mounts a React component
 * into the DOM. The initial HTML is in index.html (in this same directory).
 */
import * as React from "react"
import * as ReactDOM from "react-dom"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "normalize.css"
import "./global.scss"

import { BaseLayout } from "./components/layout/BaseLayout"
import { Hello } from "./components/pages/Hello"
import { Blank } from "./components/pages/Blank"

function App() {
    return (
        <Router>
            <BaseLayout>
                <Switch>
                    <Route path="/blank">
                        <Blank />
                    </Route>
                    <Route path="/">
                        <Hello compiler="TypeScript" framework="React" n={5} />
                    </Route>
                </Switch>
            </BaseLayout>
        </Router>
    )
}

ReactDOM.render(App(), document.getElementById("main"))
