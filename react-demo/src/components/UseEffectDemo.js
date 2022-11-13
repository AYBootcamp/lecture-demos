import React, { useEffect, useState } from 'react'

import DemoContainer from '../sharedComponents/DemoContainer'

/*
React 18 useEffect behavior
A significant change that broke things was introduced in React 18: 
while Strict Mode is active, all components mount and unmount before being remounted again.

Because this is done to provide the groundwork for a feature that isn't 
currently available in React, there is no necessity to do this for the current version of React v18.

This means that each component is mounted, then unmounted, 
and then remounted and that a useEffect call with no dependencies will be run double-time when it is used in React in version 18.

We can confirm the behavior by using the cleanup function of the useEffect hook.
*/

const UseEffectDemo = () => {
    const [count, setCount] = useState(0)

    const cleanup = (hookName) => {
        console.log('clean up... from: ' + hookName)
    }

    useEffect(() => {
        // this should only execute when component is mounted
        console.log('Empty dependencies. []')
        return () => cleanup('#1')
    }, [])

    useEffect(() => {
        // this should execute when component is mounted and updated
        console.log('No Dep. undefined')
        return () => cleanup('#2')
    }, undefined)

    useEffect(() => {
        // this should only execute when count is updated
        console.log(`Dep is count. ${count}`)
        return () => cleanup('#3')
    }, [count])

    return (
        <DemoContainer>
            <h2>Use Effect Component</h2>
            <span>Count: {count}</span>
            <button onClick={() => setCount(count + 1)}>increase count</button>
        </DemoContainer>
    )
}

export default UseEffectDemo
