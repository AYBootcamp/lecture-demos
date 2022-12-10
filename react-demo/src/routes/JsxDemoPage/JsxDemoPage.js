// CSS name collision
import './demo.css'
import './demo2.css'

import React from 'react'
import styled from 'styled-components'

import DemoContainer from '../../sharedComponents/DemoContainer'

// constant variable used in CSS-in-JS
const SPACING = 20

// styling native html JSX
const StyledUl = styled.ul`
    list-style: none;
    margin: 0;
    margin: ${SPACING}px 0;
    display: flex;
    & > li {
        padding-right: ${SPACING}px;
    }
`

// JSX & looped rendering
const MyListComponent = (props) => {
    // eslint-disable-next-line react/prop-types
    const { startingCount = 1, className } = props

    const renderListItem = () => {
        const listItems = []
        for (let i = 0; i < 10; i++) {
            listItems.push(<li key={i}>item {startingCount + i}</li>)
        }
        return listItems
    }

    return (
        // use classname prop here to style
        <StyledUl className={className}>
            {renderListItem()}
            {/* <li>item {startingCount}</li>
            <li>item {startingCount + 1}</li>
            <li>item {startingCount + 2}</li> */}
        </StyledUl>
    )
}

// styling custom defined JSX
const StyledMyComponent = styled(MyListComponent)`
    border: 1px solid black;
    font-weight: bold;
    font-size: 14px;
`

const JsxDemoPage = () => {
    return (
        <DemoContainer>
            <h1>JSX, CSS-in-JS Demo Page</h1>
            <button
                onClick={() => {
                    alert('click!')
                }}
                className="title"
            >
                click me!
            </button>
            <StyledMyComponent startingCount={5} />
            <MyListComponent />
        </DemoContainer>
    )
}

export default JsxDemoPage
