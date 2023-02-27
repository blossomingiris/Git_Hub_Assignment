import { Outlet, useNavigation } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Spinner from '../components/Spinner'
import SwitchMode from '../components/SwitchMode'
import { useUsername } from '../hooks/useUsernameContext'
import SearchPage from './SearchPage'

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
