import { useRouteError, Link } from 'react-router-dom'

function FetchDataError() {
  const error = useRouteError()

  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>Error: {error.statusText || error.message}</i>
      </p>
      <Link to='/'>Return to Search</Link>
    </div>
  )
}

export default FetchDataError
