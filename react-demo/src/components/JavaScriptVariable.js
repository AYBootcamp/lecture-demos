import React, { useState } from 'react'

const JavaScriptVariable = () => {
    const [counter, setCounter] = useState(0)
    let age = 10

    console.log('age value at render: ', age)
    return (
        <div>
            <input
                value={age}
                type={'number'}
                onChange={(e) => {
                    age = e.target.value
                    console.log('Changing age variable, age is now: ', age)
                }}
            />
            <button
                onClick={() => {
                    age++
                    console.log('Changing age variable, age is now: ', age)
                }}
            >
                increase
            </button>
            <button
                onClick={() => {
                    age--
                    console.log('Changing age variable, age is now: ', age)
                }}
            >
                decrease
            </button>
            <button
                onClick={() => {
                    setCounter(counter++)
                }}
            >
                Re-render
            </button>
        </div>
    )
}

export default JavaScriptVariable
