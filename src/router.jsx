import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Finances from './pages/Finances'
import Tasks from './pages/Tasks'
import Goals from './pages/Goals'
import Notes from './pages/Notes'
import Profile from './pages/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Home />,
  },
  {
    path: '/finances',
    element: <Finances />
  },
  {
    path: '/tasks',
    element: <Tasks />
  },
  {
    path: '/goals',
    element: <Goals />
  },
  {
    path: '/notes',
    element: <Notes />
  },
  {
    path: '/profile',
    element: <Profile />
  }
])

export default router