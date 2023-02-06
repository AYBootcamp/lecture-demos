import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink = styled(Link)`
    margin: 0 5px;
    text-decoration: none;
    border: 1px solid grey;
`

export enum PATH_NAMES {
    ONE = '1',
    TWO = '2',
    HOME = '',
    STUDENTS = 'students',
}

const PATH = [
    { path: PATH_NAMES.ONE, text: 'GO TO 1' },
    { path: PATH_NAMES.TWO, text: 'GO TO 2' },
    { path: PATH_NAMES.HOME, text: 'GO TO HOME' },
    { path: PATH_NAMES.STUDENTS, text: 'GO TO Students' },
]

const LandingPage: React.FC = () => {
    const navigate = useNavigate()

    return (
        <div>
            <nav>
                navigation
                {PATH.map((pathObj) => (
                    <StyledLink key={pathObj.path} to={pathObj.path}>
                        {pathObj.text}
                    </StyledLink>
                ))}
            </nav>

            <div>
                <Outlet />
            </div>
            <div>Home element</div>
            <button
                onClick={() => {
                    navigate(1)
                }}
            >
                forward
            </button>
            <button
                onClick={() => {
                    navigate(-1)
                }}
            >
                backward
            </button>
        </div>
    )
}

export default LandingPage
