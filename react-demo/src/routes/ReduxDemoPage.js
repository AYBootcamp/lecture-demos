import React, { useState } from 'react'

import PropsDrilling from '../components/PropsDrilling'

const ReduxDemoPage = () => {
    const [showPropsDrillingExample, setShowPropsDrillingExample] =
        useState(true)

    return (
        <div>
            <h1>Redux Demo Page</h1>
            <input
                id="showExample"
                type="checkbox"
                onChange={(e) => {
                    setShowPropsDrillingExample(e.target.checked)
                }}
            />
            <label htmlFor="showExample">Show Props-Drilling example</label>
            {showPropsDrillingExample && <PropsDrilling />}
        </div>
    )
}

export default ReduxDemoPage
