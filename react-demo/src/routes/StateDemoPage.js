import React from 'react'
import styled from 'styled-components'

import CC from '../components/ClassComponent'
import FC from '../components/FunctionalComponent'

const CenterFlex = styled.div`
    display: flex;

    & > :last-child {
        border-left: 1px solid black;
        margin-left: 20px;
        padding-left: 20px;
    }
`

const StateDemoPage = () => {
    return (
        <div>
            <h1>State Demo Page</h1>
            <CenterFlex>
                <div>
                    <h1>Functional Component</h1>
                    <FC />
                </div>
                <div>
                    <h1>Class Component</h1>
                    <CC />
                </div>
            </CenterFlex>
        </div>
    )
}

export default StateDemoPage
