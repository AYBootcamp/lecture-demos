import React, { useState } from 'react'

const FC = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            Functional Component
            <span>current count is: {count}</span>
            <div>
                <button onClick={() => setCount(count + 1)}>
                    increase count
                </button>
                <button onClick={() => setCount(count - 1)}>
                    decrease count
                </button>
            </div>
        </div>
    )
}

export default FC
