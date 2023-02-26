import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import UserProfilePage from '../pages/UserProfilePage'
import RepositoriesPage from '../pages/RepositoriesPage'
import FollowersPage from '../pages/FollowersPage'
import RootLayout from '../pages/RootLayout'
import { useUsername } from '../hooks/useUsernameContext'
import {
  getUserProfile,
  getUserRepositories,
  getUserFollowers,
} from '../api/apiRequest'
import ErrorPage from '../pages/ErrorPage'

function App() {
  const { username } = useUsername()
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
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
          path: `${username}/repositories`,
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
          path: `${username}/followers`,
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
