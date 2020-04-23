import * as React from "react"
import { NavLink } from "react-router-dom"

import "./BaseLayout.scss"

export interface BaseLayoutProps {
    // TODO what would the proper type be...
    // Perhaps make a "BaseProps" that would include common React props stuff.
    children: any
}

export const BaseLayout = (props: BaseLayoutProps) => (
    <div className="BaseLayout">
        <div className="BaseLayout_outer">
            <nav className="BaseLayout_nav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/time" activeClassName="active" exact={true}>
                    Time
                </NavLink>
                <NavLink to="/apidemo" activeClassName="active" exact={true}>
                    API Demo
                </NavLink>
            </nav>
            <div className="BaseLayout_inner">{props.children}</div>
        </div>
    </div>
)
