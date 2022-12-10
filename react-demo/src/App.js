import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Nav, { PATH } from './components/Nav'
import {
    CustomHookPage,
    ErrorPage,
    JsxDemoPage,
    LandingPage,
    LifecycleDemoPage,
    ProjectSubmissions,
    ReactRouterDemoPage,
    StateDemoPage,
    StudentProfile,
    Students,
} from './routes'

// RouterDemo #1: Create router object
const router = createBrowserRouter([
    {
        path: PATH.root,
        element: <Nav />,
        children: [
            {
                path: PATH.root,
                element: <LandingPage />,
            },
            {
                path: PATH.jsxDemoPage,
                element: <JsxDemoPage />,
            },
            {
                path: PATH.stateDemoPage,
                element: <StateDemoPage />,
            },
            {
                path: PATH.lifecycleDemoPage,
                element: <LifecycleDemoPage />,
            },
            {
                path: PATH.customHookPage,
                element: <CustomHookPage />,
            },
            {
                path: PATH.reactRouterPage,
                element: <ReactRouterDemoPage />,
                // RouterDemo #6-a: Route Nesting
                children: [
                    {
                        path: 'students',
                        element: <Students />,
                    },
                    {
                        path: 'students/:studentId',
                        element: <StudentProfile />,
                    },
                    {
                        path: 'project_submission',
                        element: <ProjectSubmissions />,
                    },
                ],
            },
        ],
        // RouterDemo #5: Error page
        errorElement: <ErrorPage />,
    },
])

// RouterDemo #2: Render RouterProvider
const App = () => {
    return <RouterProvider router={router} />
}

export default App
