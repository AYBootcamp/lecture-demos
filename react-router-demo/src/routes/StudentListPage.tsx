import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components'

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    > * {
        margin: 2px;
        text-decoration: none;
    }
`

const StudentLink = styled(Link)``

const StudentListPage: React.FC = () => {
    return (
        <ListWrapper>
            {Array(50)
                .fill(0)
                .map((student, index) => (
                    <div key={`student-${index}`}>
                        <StudentLink to={index.toString()}>
                            student id: {index}
                        </StudentLink>
                        <Outlet />
                    </div>
                ))}
        </ListWrapper>
    )
}

export default StudentListPage
