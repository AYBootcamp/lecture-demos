import React, { useState } from 'react'

import LifecycleDemo from '../components/LifecycleDemo'
import UseEffectDemo from '../components/UseEffectDemo'

const LifecycleDemoPage = () => {
    const [componentToRender, setComponentToRender] = useState('')

    const renderComponent = () => {
        switch (componentToRender) {
            case 'function': {
                return <UseEffectDemo />
            }
            case 'class': {
                return <LifecycleDemo />
            }
            default:
                return <div>No component selected</div>
        }
    }

    return (
        <div>
            <h1>Lifecycle Demo Page</h1>
            <div>
                <select onChange={(e) => setComponentToRender(e.target.value)}>
                    <option value=""></option>
                    <option value={'function'}>
                        Functional Component - UseEffect
                    </option>
                    <option value={'class'}>
                        Class Component - Lifecycle methods
                    </option>
                </select>
                <hr />
                {renderComponent()}
            </div>
        </div>
    )
}

export default LifecycleDemoPage
