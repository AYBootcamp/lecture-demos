import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Nav, { PATH } from './components/Nav'
import CustomHookPage from './routes/CustomhookPage'
import JsxDemoPage from './routes/JsxDemoPage'
import LandingPage from './routes/LandingPage'
import LifecycleDemoPage from './routes/LifecycleDemoPage'
import StateDemoPage from './routes/StateDemoPage'

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
        ],
        errorElement: <div>404</div>,
    },
])

const App = () => {
    return <RouterProvider router={router} />
}

export default App
