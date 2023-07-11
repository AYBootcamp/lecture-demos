import React, { useState } from 'react'

import { getFibNums } from './getFibNums'

const Fibonacci = () => {
    const [numbers, setNumbers] = useState([])

    const getFibNumber = () => {
        return getFibNums(numbers.length ?? 0)
    }

    return (
        <div>
            <h2>Fibonacci Numbers</h2>
            <label>Fib</label>
            <div>
                {numbers.map((number, index) => (
                    <span key={index} style={{ padding: '5px' }}>
                        {number}
                    </span>
                ))}
            </div>

            <div>
                {numbers.map((number, index) => (
                    <span key={index} style={{ padding: '5px' }}>
                        {index}
                    </span>
                ))}
            </div>
            <label>Index</label>
            <div>
                <button
                    onClick={() => {
                        const newNums = [...numbers]
                        newNums.push(getFibNumber())
                        setNumbers(newNums)
                    }}
                >
                    Get next number
                </button>
            </div>
        </div>
    )
}

export default Fibonacci
