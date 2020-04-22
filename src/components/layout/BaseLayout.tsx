import * as React from "react"

import "./BaseLayout.scss"

export interface BaseLayoutProps {
    // TODO what would the proper type be...
    // Perhaps make a "BaseProps" that would include common React props stuff.
    children: any
}

export const BaseLayout = (props: BaseLayoutProps) => (
    <div className="BaseLayout">
        <div className="BaseLayout_outer">{props.children}</div>
    </div>
)
