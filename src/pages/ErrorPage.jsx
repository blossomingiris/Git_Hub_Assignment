import { useRouteError, Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { useUsername } from '../hooks/useUsernameContext'

function ErrorPage() {
  const { setUsername } = useUsername()
  const { statusText, message } = useRouteError()

  const onClickHandler = () => {
    setUsername('')
    sessionStorage.removeItem('username')
  }

  return (
    <main className='h-screen w-screen bg-greyLight-1 py-24 px-6 sm:py-32 lg:px-8'>
      <div className='text-center'>
        <h1 className='font-semibold text-accent-color text-2xl md:text-4xl'>
          Oops!
        </h1>
        <h2 className='mt-4 font-bold tracking-tight text-greyDark-1 text-lg md:text-2xl'>
          Sorry, an unexpected error has occurred.
        </h2>
        <p className='mt-6 text-base leading-7 text-greyDark-1 text-sm md:text-lg'>
          <i>Error: {statusText || message}</i>
        </p>
        <div
          onClick={onClickHandler}
          className='mt-10 flex items-center justify-center gap-x-6'
        >
          <Link
            to='/'
            className='flex items-center gap-x-3 justify-center text-md font-semibold text-accent-color hover:text-greyDark-2 transition-color ease-in-out duration-200'
          >
            <span>
              <BsArrowLeft className='text-lg' />
            </span>
            Go back to Search
          </Link>
        </div>
      </div>
    </main>
  )
}

export default ErrorPage
