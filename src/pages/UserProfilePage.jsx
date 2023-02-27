import { useLoaderData } from 'react-router-dom'

import { HiLocationMarker } from 'react-icons/hi'
import { BsPersonFill } from 'react-icons/bs'
import { FaAngellist } from 'react-icons/fa'
import { FaUsers } from 'react-icons/fa'
import { BsFolderFill } from 'react-icons/bs'

function UserProfilePage() {
  const { login, name, avatar_url, location, bio, public_repos, followers } =
    useLoaderData()

  return (
    <main className='flex-grow bg-greyLight-1 flex justify-center items-center dark:bg-greyDark-3'>
      <section className='w-[90%] max-w-sm shadow-outer-shadow rounded-lg dark:shadow-outer-shadow-dark'>
        <div className='flex flex-col items-center p-3.5 sm:p-5 md:p-10 gap-y-3'>
          <img
            className='w-[120px] h-[120px] md:w-[200px] md:h-[200px] mb-3 rounded-lg shadow-outer-shadow dark:shadow-outer-shadow-dark'
            src={avatar_url}
            alt={`${login} avatar`}
          />
          <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-accent-color'>
            {login}
          </h5>
          <span className='flex gap-x-2 text-sm text-gray-500 dark:text-gray-200'>
            <BsPersonFill className='text-accent-color w-5 h-5' />{' '}
            {name || 'No name found'}
          </span>
          <span className='flex gap-x-2 text-sm text-gray-500 dark:text-gray-200'>
            <HiLocationMarker className='text-accent-color w-5 h-5' />{' '}
            {location || 'No location found'}
          </span>
          <span className='flex gap-x-2 text-sm text-gray-500 dark:text-gray-200'>
            <FaAngellist className='text-accent-color w-[25px] h-[25px]' />{' '}
            {bio || 'No bio found'}
          </span>
          <span className='flex gap-x-2 text-sm text-gray-500 dark:text-gray-200'>
            <BsFolderFill className='text-accent-color w-[25px] h-[25px]' />{' '}
            {public_repos} public repositories
          </span>
          <span className='flex gap-x-2 text-sm text-gray-500 dark:text-gray-200'>
            <FaUsers className='text-accent-color w-[25px] h-[25px]' />{' '}
            {followers} followers
          </span>
        </div>
      </section>
    </main>
  )
}

export default UserProfilePage
