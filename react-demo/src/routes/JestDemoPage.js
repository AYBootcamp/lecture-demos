import React, { useState } from 'react'

import Calculator from '../demos/JestDemo/Calculator'
import DemoContainer from '../sharedComponents/DemoContainer'

const JestDemoPage = () => {
    return (
        <DemoContainer>
            <h1>Jest Demo Page</h1>
            <Calculator />
        </DemoContainer>
    )
}

export default JestDemoPage
