import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const ErrorPage = () => {
    const nagivate = useNavigate()
    return (
        <PageWrapper>
            <h1>404!</h1>
            <h3>This page does not exists</h3>
            {/* RouterDemo #7: Nagivate backwards in the history stack */}
            <button onClick={() => nagivate(-1)}>Go back</button>
        </PageWrapper>
    )
}

export default ErrorPage
