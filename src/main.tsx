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
import { APIDemo } from "./components/pages/APIDemo"

import { FakeAPI } from "./lib/ts/api"

const api = new FakeAPI()

function App() {
    return (
        <Router>
            <BaseLayout>
                <Switch>
                    <Route path="/" exact={true}>
                        <Hello compiler="TypeScript" framework="React" n={5} />
                    </Route>
                    <Route path="/blank" exact={true}>
                        <Blank />
                    </Route>
                    <Route path="/apidemo" exact={true}>
                        <APIDemo api={api} />
                    </Route>
                </Switch>
            </BaseLayout>
        </Router>
    )
}

ReactDOM.render(App(), document.getElementById("main"))
