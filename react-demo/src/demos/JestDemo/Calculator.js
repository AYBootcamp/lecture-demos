import React, { useState } from 'react'

import { add, divide, multiply, subtract } from './calculate'

const Calculator = () => {
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [op, setOp] = useState('+')
    const [result, setResult] = useState(null)

    const operations = ['+', '-', '*', '/']
    const calculate = () => {
        // do something
        switch (op) {
            case '+': {
                setResult(add(input1, input2))
                break
            }
            case '-': {
                setResult(subtract(input1, input2))
                break
            }
            case '*': {
                setResult(multiply(input1, input2))
                break
            }
            case '/': {
                setResult(divide(input1, input2))
                break
            }
        }
    }

    return (
        <div>
            <h2>Calculator</h2>
            <div>
                <label>First number</label>
                <input
                    value={input1}
                    type="number"
                    onChange={(e) => setInput1(+e.target.value)}
                />
            </div>
            <div>
                <label>Second number</label>
                <input
                    value={input2}
                    type="number"
                    onChange={(e) => setInput2(+e.target.value)}
                />
            </div>
            <div>
                <label>Operation</label>
                <select
                    style={{ fontSize: '20px' }}
                    onChange={(e) => setOp(e.target.value)}
                >
                    {operations.map((operation, index) => (
                        <option key={index} value={operation}>
                            {operation}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={() => calculate()}> calculate</button>
            <section>
                <h3>Formula: </h3>
                <span>{`${input1} ${op} ${input2} = ${result ?? ''}`}</span>
            </section>
        </div>
    )
}

export default Calculator
