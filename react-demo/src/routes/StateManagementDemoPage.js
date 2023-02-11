import React, { useState } from 'react'

import HideAndShowCheckbox from '../components/HideAndShowCheckbox'
import PropsDrilling from '../demos/PropsDrillingDemo'
import ReactContext from '../demos/ReactContextDemo'
import ReduxDemo from '../demos/ReduxDemo'
import DemoContainer from '../sharedComponents/DemoContainer'

const StateManagementDemoPage = () => {
    const [showPropsDrillingExample, setShowPropsDrillingExample] =
        useState(true)
    const [showReactContextExample, setShowReactContextExample] = useState(true)
    const [showReduxExample, setShowReduxExample] = useState(true)

    const demoControlConfigs = [
        {
            id: 'showPropsDrill',
            checked: showPropsDrillingExample,
            label: 'Show Props-Drilling example',
            onChange: (checked) => setShowPropsDrillingExample(checked),
        },
        {
            id: 'showContext',
            checked: showReactContextExample,
            label: 'Show React-Context example',
            onChange: (checked) => setShowReactContextExample(checked),
        },
        {
            id: 'showRedux',
            checked: showReduxExample,
            label: 'Show Redux example',
            onChange: (checked) => setShowReduxExample(checked),
        },
    ]

    return (
        <DemoContainer>
            <h1>State Management Demo Page</h1>
            {demoControlConfigs.map(({ id, checked, label, onChange }) => (
                <HideAndShowCheckbox
                    key={id}
                    id={id}
                    checked={checked}
                    label={label}
                    onChange={onChange}
                />
            ))}
            {showPropsDrillingExample && <PropsDrilling />}
            {showReactContextExample && <ReactContext />}
            {showReduxExample && <ReduxDemo />}
        </DemoContainer>
    )
}

export default StateManagementDemoPage
