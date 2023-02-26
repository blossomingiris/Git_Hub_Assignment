import { useLoaderData } from 'react-router-dom'
import { HiLocationMarker } from 'react-icons/hi'
import { BsPersonFill } from 'react-icons/bs'
import { FaAngellist } from 'react-icons/fa'

function UserProfilePage() {
  const { login, name, avatar_url, location, bio } = useLoaderData()

  return (
    <main className='flex-grow bg-greyLight-1 flex items-start justify-center'>
      <section className='w-[90%] max-w-sm shadow-outer-shadow rounded-lg mt-5'>
        <div className='flex flex-col items-center p-3.5 sm:p-5 md:p-12 gap-y-3'>
          <img
            className='w-[200px] h-[200px] mb-3 rounded-lg shadow-outer-shadow'
            src={avatar_url}
            alt={`${login} avatar`}
          />
          <div></div>
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
            {login}
          </h5>
          <span className='flex gap-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <BsPersonFill className='text-accent-color w-5 h-5' />{' '}
            {name || 'No name found'}
          </span>
          <span className='flex gap-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <HiLocationMarker className='text-accent-color w-5 h-5' />{' '}
            {location || 'No location found'}
          </span>
          <span className='flex gap-x-2 text-sm text-gray-500 dark:text-gray-400'>
            <FaAngellist className='text-accent-color w-5 h-5' />{' '}
            {bio || 'No bio found'}
          </span>
        </div>
      </section>
    </main>
  )
}

export default UserProfilePage
