import PropTypes from 'prop-types'
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

const UseEffectDemo = (props) => {
    const [count, setCount] = useState(props.initialCount)
    const [isLoading, setIsLoading] = useState(true)

    const cleanup = (hookName) => {
        console.log('clean up... from: ' + hookName)
    }

    useEffect(() => {
        // this should only execute when component is mounted
        console.log('Empty dependencies. []')

        // Simulate 3s async data fetching
        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
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

        // Skip 10s
        if (count % 10 === 0) {
            setCount(count + 1)
        }
        return () => cleanup('#3')
    }, [count])

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <DemoContainer>
            <h2>useEffect Functional Component</h2>
            <span>Count: {count}</span>
            <button onClick={() => setCount(count + 1)}>increase count</button>
        </DemoContainer>
    )
}

UseEffectDemo.propTypes = {
    initialCount: PropTypes.number,
}

export default UseEffectDemo
