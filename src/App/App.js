import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage'
import RepositoriesPage from '../pages/RepositoriesPage/RepositoriesPage'
import FollowersPage from '../pages/FollowersPage/FollowersPage'
import RootLayout from '../pages/RootLayout'
import { useUsername } from '../hooks/useUsernameContext'
import {
  getUserProfile,
  getUserRepositories,
  getUserFollowers,
} from '../api/apiRequest'
import FetchDataError from '../components/FetchDataError'

function App() {
  const { username } = useUsername()
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <FetchDataError />,
      children: [
        {
          path: `${username}`,
          element: <UserProfilePage />,
          loader: async () => {
            if (username) {
              return getUserProfile(username)
            } else {
              return null
            }
          },
        },
        {
          path: `repositories/${username}`,
          element: <RepositoriesPage />,
          loader: async () => {
            if (username) {
              return getUserRepositories(username)
            } else {
              return null
            }
          },
        },
        {
          path: `followers/${username}`,
          element: <FollowersPage />,
          loader: async () => {
            if (username) {
              return getUserFollowers(username)
            } else {
              return null
            }
          },
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
