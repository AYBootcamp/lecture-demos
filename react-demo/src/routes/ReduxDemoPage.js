import React, { useState } from 'react'

import PropsDrilling from '../components/PropsDrilling'
import ReactContext from '../components/ReactContextDemo'

const ReduxDemoPage = () => {
    const [showPropsDrillingExample, setShowPropsDrillingExample] =
        useState(true)
    const [showReactContextExample, setShowReactContextExample] = useState(true)

    return (
        <div>
            <h1>Redux Demo Page</h1>
            {/* possible refactoring here */}
            <input
                id="showPropsDrill"
                type="checkbox"
                checked={showPropsDrillingExample}
                onChange={(e) => {
                    setShowPropsDrillingExample(e.target.checked)
                }}
            />
            <label htmlFor="showPropsDrill">Show Props-Drilling example</label>
            <input
                id="showContext"
                type="checkbox"
                checked={showReactContextExample}
                onChange={(e) => {
                    setShowReactContextExample(e.target.checked)
                }}
            />
            <label htmlFor="showContext">Show React-Context example</label>
            {showPropsDrillingExample && <PropsDrilling />}
            {showReactContextExample && <ReactContext />}
        </div>
    )
}

export default ReduxDemoPage
