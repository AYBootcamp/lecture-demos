import PropTypes from 'prop-types'
import React, { useState } from 'react'

const PropsDrilling = () => {
    const [studentIds, setStudentIds] = useState(Array.from(Array(20).keys())) // [1,2,3,....,20]
    return (
        <div>
            <h3>Props-Drilling Example</h3>
            {/* Both components needs studentIds, so we had to put students at parent level */}
            <StudentList studentIds={studentIds} />
            <AuthorizedControls
                studentIds={studentIds}
                setStudentIds={setStudentIds}
            />
        </div>
    )
}

// Component 1: Display a list of students
const StudentList = ({ studentIds }) => {
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
StudentList.propTypes = {
    studentIds: PropTypes.arrayOf(PropTypes.number),
}

// Component 2: Add or Removes students
const AdmissionControl = ({ studentIds, setStudentIds }) => {
    const [selectedId, setSelectedId] = useState(null)
    return (
        <>
            <h3>Amission</h3>
            <select
                onChange={(e) => {
                    console.log(e.target.value)
                    setSelectedId(+e.target.value)
                }}
            >
                <option value={null}></option>
                {studentIds.map((id) => (
                    <option style={{}} key={id} value={+id}>
                        Student #{id}
                    </option>
                ))}
                <option>1</option>
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
AdmissionControl.propTypes = {
    studentIds: PropTypes.arrayOf(PropTypes.number),
    setStudentIds: PropTypes.func,
}

// List of controls that only used by admins
const AuthorizedControls = ({ studentIds, setStudentIds }) => {
    return (
        <div>
            {/* ... imagine some other controls here too... */}
            <AdmissionControl
                // props-drilling!
                studentIds={studentIds}
                setStudentIds={setStudentIds}
            />
            {/* ... imagine some other controls here too... */}
        </div>
    )
}

AuthorizedControls.propTypes = {
    studentIds: PropTypes.arrayOf(PropTypes.number),
    setStudentIds: PropTypes.func,
}

export default PropsDrilling
