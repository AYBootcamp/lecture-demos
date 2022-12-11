import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'

import { students } from './mockData'

const StyledLabel = styled.label`
    font-weight: bold;
`

const StudentProfile = () => {
    let location = useLocation()
    let params = useParams()
    console.info({ location, params })

    const { studentId } = params

    /* Access profile using the id from mock data */
    const studentProfile = students[studentId]
    return (
        <div>
            <hr />
            <h3>Student Profile - {studentId}</h3>
            <StyledLabel>Name: </StyledLabel>
            <p>{studentProfile.name}</p>
            <StyledLabel>Age: </StyledLabel>
            <p>{studentProfile.age}</p>
        </div>
    )
}

export default StudentProfile
