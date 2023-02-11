import React from 'react'
import styled from 'styled-components'

import ClassComponent from '../components/ClassComponent'
import ControlledComponent from '../components/ControlledComponent'
import FunctionalComponent from '../components/FunctionalComponent'
import JavaScriptVariable from '../components/JavaScriptVariable'
import UncontrolledComponent from '../components/UncontrolledComponent'
import DemoContainer from '../sharedComponents/DemoContainer'

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
        <DemoContainer>
            <h1>State Demo Page</h1>
            <CenterFlex>
                <div>
                    <h1>Functional Component</h1>
                    <FunctionalComponent />
                </div>
                <div>
                    <h1>Class Component</h1>
                    <ClassComponent />
                </div>
            </CenterFlex>
            <div>
                <h1>Controlled Component</h1>
                <ControlledComponent />
            </div>
            <div>
                <h1>Uncontrolled Component</h1>
                <UncontrolledComponent />
            </div>
            <div>
                <h1>JavaScript Variable Used as state</h1>
                <JavaScriptVariable />
            </div>
        </DemoContainer>
    )
}

export default StateDemoPage
