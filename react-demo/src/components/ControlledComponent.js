import React, { useState } from 'react'

const ControlledComponent = () => {
    const [age, setAge] = useState(10)
    return (
        <div>
            <input
                value={age}
                type={'number'}
                onChange={(e) => setAge(e.target.value)}
            />
            <button onClick={() => setAge(age + 1)}>increase</button>
            <button onClick={() => setAge(age - 1)}>decrease</button>
        </div>
    )
}

export default ControlledComponent
