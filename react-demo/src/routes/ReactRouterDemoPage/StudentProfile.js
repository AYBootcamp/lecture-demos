import React from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

import { students } from './mockData'

const StyledLabel = styled.label`
    font-weight: bold;
`

const StudentProfile = () => {
    let location = useLocation()
    console.info({ location })

    // pathname is a string "/reactRouterPage/students/1002", we can use split to get the id
    const studentId = location.pathname.split('/').at(-1)

    /* Access profile using the id from mock data */
    const studentProfile = students[studentId]
    return (
        <div>
            <h3>Student Profile - {studentId}</h3>
            <StyledLabel>Name: </StyledLabel>
            <p>{studentProfile.name}</p>
            <StyledLabel>Age: </StyledLabel>
            <p>{studentProfile.age}</p>
        </div>
    )
}

export default StudentProfile
