import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navbar/Navigation'
import SearchForm from '../components/SearchForm'
import { useUsername } from '../hooks/useUsernameContext'

function RootLayout() {
  const { username } = useUsername()

  return (
    <>
      {username ? (
        <>
          <Navigation />
          <Outlet />
        </>
      ) : (
        <SearchForm />
      )}
    </>
  )
}

export default RootLayout
