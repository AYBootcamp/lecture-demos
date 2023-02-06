import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ErrorPage from './routes/ErrorPage'
import LandingPage, { PATH_NAMES } from './routes/LandingPage'
import StudentDetail from './routes/StudentDetailPage'
import StudentListPage from './routes/StudentListPage'

const router = createBrowserRouter([
  {
    path: `/${PATH_NAMES.HOME}`,
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: PATH_NAMES.ONE,
        element: <div> PATH 1 </div>,
      },
      {
        path: PATH_NAMES.TWO,
        element: <div> PATH 2 </div>,
      },
      {
        path: PATH_NAMES.STUDENTS,
        element: <StudentListPage />,
      },
      {
        path: PATH_NAMES.STUDENTS + '/:studentId',
        element: <StudentDetail />,
      },
    ],
  },
])

const App: React.FC = () => {
  // Router object

  return <RouterProvider router={router} />
}

export default App
