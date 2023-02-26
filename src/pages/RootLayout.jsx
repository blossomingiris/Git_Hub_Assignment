import { Outlet, useNavigation } from 'react-router-dom'
import Navigation from '../components/Navbar/Navigation'
import Search from '../components/Search/Search'
import Spinner from '../components/Spinner/Spinner'
import { useUsername } from '../hooks/useUsernameContext'

function RootLayout() {
  const { username } = useUsername()
  const navigation = useNavigation()

  return (
    <>
      {navigation.state === 'loading' && <Spinner />}
      {username ? (
        <div className='flex flex-col h-screen'>
          <Navigation />
          <Outlet />
        </div>
      ) : (
        <Search />
      )}
    </>
  )
}

export default RootLayout
