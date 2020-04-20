import * as React from "react"
import styled from "styled-components"

import partyparrot from "../assets/images/partyparrot.gif"

const Styled = styled.div`
    .outer {
        width: 100vw;
        text-align: center;

        h1 {
            color: blue;
        }
    }
`

export interface HelloProps {
    compiler: string
    framework: string
}

export const Hello = (props: HelloProps) => (
    <Styled>
        <div className="outer">
            <h1>
                Hello from {props.compiler} and {props.framework}!
            </h1>
            <p>
                <img src={partyparrot} />
            </p>
        </div>
    </Styled>
)
