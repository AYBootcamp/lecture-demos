import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { students } from './mockData'

const StyledProfileLink = styled(Link)`
    margin: 0 10px;
`

const Students = () => {
    return (
        <div>
            <h3>Students</h3>
            {Object.values(students).map((student) => (
                // create Link url using loop
                <StyledProfileLink to={`${student.id}`} key={student.id}>
                    <button>{student.name}</button>
                </StyledProfileLink>
            ))}
        </div>
    )
}

export default Students
