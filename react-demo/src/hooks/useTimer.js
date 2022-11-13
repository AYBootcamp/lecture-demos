import { useEffect, useState } from 'react'

const useTimer = (countDownTimer = 2000) => {
    const [timer, setTimer] = useState(countDownTimer) // timer in ms
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

    return [timer, toggle]
}

export default useTimer
