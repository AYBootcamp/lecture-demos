import React, { useEffect, useState } from 'react'

import useTimer from '../hooks/useTimer'
import DemoContainer from '../sharedComponents/DemoContainer'

const WithoutHook = () => {
    const [timer, setTimer] = useState(2000) // timer in ms
    const [isActive, setIsActive] = useState(false)

    const toggle = () => {
        setIsActive(!isActive)
    }

    useEffect(() => {
        let timerInterval = null
        if (isActive && timer > 0) {
            timerInterval = setInterval(() => {
                setTimer(timer - 100)
            }, 100)
        } else if (timer <= 0) {
            clearInterval(timerInterval)
        }
        return () => clearInterval(timerInterval)
    }, [timer, isActive])

    return (
        <DemoContainer>
            <span>timer: {timer} ms</span>
            <button onClick={toggle}>{isActive ? 'Stop' : 'Start'}</button>
        </DemoContainer>
    )
}

const WithHook = () => {
    const [timer, isActive, toggle] = useTimer(2000)
    return (
        <DemoContainer>
            <span>timer: {timer} ms</span>
            <button onClick={toggle}>{isActive ? 'Stop' : 'Start'}</button>
        </DemoContainer>
    )
}

const CustomHookPage = () => {
    return (
        <DemoContainer>
            <h1>Custom Hook Demo Page</h1>
            <h2>With timer logic Component</h2>
            <WithoutHook />
            <h2>With custom hook component</h2>
            <WithHook />
        </DemoContainer>
    )
}

export default CustomHookPage
