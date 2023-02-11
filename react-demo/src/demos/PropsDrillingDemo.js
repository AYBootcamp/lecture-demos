import PropTypes from 'prop-types'
import React, { useState } from 'react'

const PropsDrillingDemo = () => {
    const [studentIds, setStudentIds] = useState(Array.from(Array(20).keys())) // [1,2,3,....,20]
    const [selectedId, setSelectedId] = useState(null)
    return (
        <div>
            <h3>Props-Drilling Example</h3>
            {/* Both components needs studentIds, so we had to put students at parent level */}
            <StudentList studentIds={studentIds} selectedId={selectedId} />
            <AuthorizedControls
                studentIds={studentIds}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                setStudentIds={setStudentIds}
            />
        </div>
    )
}

// Component 1: Display a list of students
const StudentList = ({ studentIds, selectedId }) => {
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
                            fontWeight: selectedId === id ? 'bold' : '',
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
    selectedId: PropTypes.string,
    studentIds: PropTypes.arrayOf(PropTypes.number),
}

// Component 2: Add or Removes students
const AdmissionControl = ({
    studentIds,
    setStudentIds,
    selectedId,
    setSelectedId,
}) => {
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
AdmissionControl.propTypes = {
    studentIds: PropTypes.arrayOf(PropTypes.number),
    selectedId: PropTypes.number,
    setStudentIds: PropTypes.func,
    setSelectedId: PropTypes.func,
}

// List of controls that only used by admins
const AuthorizedControls = ({
    studentIds,
    setStudentIds,
    selectedId,
    setSelectedId,
}) => {
    return (
        <div>
            {/* ... imagine some other controls here too... */}
            <AdmissionControl
                // props-drilling!
                studentIds={studentIds}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
                setStudentIds={setStudentIds}
            />
            {/* ... imagine some other controls here too... */}
        </div>
    )
}

AuthorizedControls.propTypes = {
    studentIds: PropTypes.arrayOf(PropTypes.number),
    selectedId: PropTypes.number,
    setStudentIds: PropTypes.func,
    setSelectedId: PropTypes.func,
}

export default PropsDrillingDemo
