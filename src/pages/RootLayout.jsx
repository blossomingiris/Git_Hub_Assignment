import { Outlet, useNavigation } from 'react-router-dom'

import Navigation from '../components/Navigation'
import Spinner from '../components/Spinner'
import SearchPage from './SearchPage'
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
        <SearchPage />
      )}
    </>
  )
}

export default RootLayout
