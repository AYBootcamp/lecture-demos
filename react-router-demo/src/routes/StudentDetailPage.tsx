import React from 'react'
import { useParams } from 'react-router-dom'

const StudentDetailPage: React.FC = () => {
    const params = useParams()
    console.log({ params })
    return <div> student detail - {params.studentId} </div>
}

export default StudentDetailPage
