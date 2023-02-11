import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import DemoContainer from '../../sharedComponents/DemoContainer'
// RouterDemo #4: Land on page, element prop
const ReactRouterDemoPage = () => {
    return (
        <DemoContainer>
            <h1>ReactRouter Demo Page</h1>
            <p> More navigation under the ReactRouterDemoPage </p>
            {/* RouterDemo #6-b: Route Nesting - sub routes navigation  */}
            <ul>
                <li>
                    <Link to="">/</Link>
                </li>
                <li>
                    <Link to="students">Students</Link>
                </li>
                <li>
                    <Link to="project_submission">Project Submissions</Link>
                </li>
            </ul>

            {/* RouterDemo #6-c: Route Nesting - Children */}
            <h3> Nested child component will render here: (Outlet)</h3>
            <hr />
            <Outlet />
            <hr />
        </DemoContainer>
    )
}
export default ReactRouterDemoPage
