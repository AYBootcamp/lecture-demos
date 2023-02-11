import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Spinner from '../../components/Spinner'
import { decrement, increment } from './counterSlice'
import { fetchStudentIds } from './studentSlice'

const ReduxDemo = () => {
    const count = useSelector((state) => state.counter.value)
    const { fetchStatus } = useSelector((state) => state.students)
    const dispatch = useDispatch()

    return (
        <div>
            <h3>Redux Example</h3>
            <h4>Counter slice</h4>
            <span>current count is: {count}</span>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <h4>Student slice</h4>
            {/* this is fake */}
            <button onClick={() => dispatch(fetchStudentIds())}>
                Fetch student data
            </button>
            {fetchStatus === 'loading' ? (
                <Spinner />
            ) : (
                <>
                    <StudentList />
                    <AuthorizedControls />
                </>
            )}
        </div>
    )
}

// Component 1: Display a list of students
const StudentList = () => {
    // these are state variables we created in slice
    const { studentIds, selectedStudentId } = useSelector(
        (state) => state.students
    )
    return (
        <>
            <h3>Student List:</h3>
            <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
                {studentIds.map((id) => (
                    <li
                        style={{
                            listStyle: 'none',
                            margin: '0 2px',
                            flexBasis: '20%',
                            fontWeight: selectedStudentId === id ? 'bold' : '',
                        }}
                        key={id}
                    >
                        Student #{id}
                    </li>
                ))}
            </ul>
        </>
    )
}
StudentList.propTypes = {}

// Component 2: Add or Removes students
const AdmissionControl = () => {
    const studentIds = useSelector((state) => state.students.studentIds)
    return (
        <>
            <h3>Amission</h3>
            <select
                onChange={(e) => {
                    setSelectedId(+e.target.value)
                }}
            >
                <option value={null}></option>
                {studentIds.map((id) => (
                    <option style={{}} key={id} value={+id}>
                        Student #{id}
                    </option>
                ))}
            </select>
            <button
                onClick={() => {
                    if (selectedId) {
                        const newList = [...studentIds]
                        newList.splice(newList.indexOf(selectedId), 1)
                        setStudentIds(newList)
                        setSelectedId(null)
                    }
                }}
            >
                Remove
            </button>
        </>
    )
}
AdmissionControl.propTypes = {}

// List of controls that only used by admins
const AuthorizedControls = () => {
    return (
        <div>
            {/* ... imagine some other controls here too... */}
            <AdmissionControl />
            {/* ... imagine some other controls here too... */}
        </div>
    )
}

AuthorizedControls.propTypes = {}

export default ReduxDemo
