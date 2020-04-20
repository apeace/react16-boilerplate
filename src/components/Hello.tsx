import * as React from "react"

import partyparrot from "../assets/images/partyparrot.gif"
import "./Hello.scss"

export interface HelloProps {
    compiler: string
    framework: string
}

export const Hello = (props: HelloProps) => (
    <div className="Hello">
        <div className="outer">
            <p>
                Hello from {props.compiler} and {props.framework}!
            </p>
            <p>
                <img src={partyparrot} />
            </p>
        </div>
    </div>
)
