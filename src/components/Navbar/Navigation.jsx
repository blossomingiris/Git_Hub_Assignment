import { Link } from 'react-router-dom'
import { useUsername } from '../../hooks/useUsernameContext'
import SearchForm from '../SearchForm'

function Navigation() {
  const { username } = useUsername()

  return (
    <nav>
      <ul>
        <li>
          <Link to={`${username}`}>User Profile</Link>
        </li>
        <li>
          <Link to={`repositories/${username}`}>Repositories</Link>
        </li>
        <li>
          <Link to={`followers/${username}`}>Followers</Link>
        </li>
      </ul>
      <SearchForm />
    </nav>
  )
}

export default Navigation
