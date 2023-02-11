import PropTypes from 'prop-types'
import React, { useContext, useState } from 'react'

export const StudentContext = React.createContext({})

const ReactContextDemo = () => {
    const [studentIds, setStudentIds] = useState(Array.from(Array(20).keys())) // [1,2,3,....,20]
    const [selectedId, setSelectedId] = useState(null)
    return (
        <div>
            <h3>React-Context Example</h3>
            {/* Provider - pass in multiple variables, functions as Object */}
            <StudentContext.Provider
                value={{ studentIds, setStudentIds, selectedId, setSelectedId }}
            >
                <StudentList />
                <AuthorizedControls />
            </StudentContext.Provider>
        </div>
    )
}

// Component 1: Display a list of students
const StudentList = () => {
    // useContext hook to pull the value instead of consumer
    const value = useContext(StudentContext)
    const { studentIds, selectedId } = value

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
StudentList.propTypes = {}

// Component 2: Add or Removes students
const AdmissionControl = () => {
    return (
        // Consumer
        <StudentContext.Consumer>
            {({ studentIds, setStudentIds, selectedId, setSelectedId }) => (
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
            )}
        </StudentContext.Consumer>
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

export default ReactContextDemo
