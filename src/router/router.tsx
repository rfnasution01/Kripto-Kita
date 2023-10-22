import { createBrowserRouter } from 'react-router-dom'
import { IndexDashboard, MainLayout } from './loadables'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        path: '',
        element: <IndexDashboard />,
      },
    ],
  },
])
