import { useLoaderData } from 'react-router-dom'
import { useState } from 'react'
import { useUsername } from '../hooks/useUsernameContext'
import { BsStarFill, BsFolderFill } from 'react-icons/bs'
import { HiSortAscending, HiSortDescending } from 'react-icons/hi'

function RepositoriesPage() {
  const userRepositoriesData = useLoaderData()
  const { username } = useUsername()
  const [sortOrder, setSortOrder] = useState('desc')

  const sortRepositoriesByStars = () => {
    const sortedRepositories = userRepositoriesData.sort((a, b) => {
      return sortOrder === 'asc'
        ? a.stargazers_count - b.stargazers_count
        : b.stargazers_count - a.stargazers_count
    })
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc') // toggle sorting order
    return sortedRepositories
  }

  return (
    <main className='flex-grow bg-greyLight-1 flex items-start justify-center'>
      {userRepositoriesData.length ? (
        <div className='w-full max-w-md p-4 shadow-outer-shadow rounded-lg m-3 mt-10 sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
          <div className='flex items-center justify-between mb-4'>
            <h5 className='text-xl font-bold leading-none text-greyDark-2 dark:text-white'>
              <span className='text-accent-color'>{username} </span>
              repositories
            </h5>
            <button
              onClick={sortRepositoriesByStars}
              className='p-3 text-sm font-medium rounded-lg shadow-outer-shadow outline-none focus:outline-none focus:shadow-inner-shadow transition-scale ease-in-out duration-100'
            >
              {sortOrder === 'desc' ? (
                <HiSortDescending className='text-gradient-pink w-5 h-5' />
              ) : (
                <HiSortAscending className='text-gradient-pink w-5 h-5' />
              )}
            </button>
          </div>
          <div className='flow-root'>
            <ul className='divide-y divide-greyLight-2 dark:divide-gray-700'>
              {userRepositoriesData.map((repo) => (
                <li className='py-3 sm:py-4' key={repo.id}>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center space-x-2'>
                        <BsFolderFill className='text-accent-color w-4 h-4' />
                        <p className='text-sm font-medium text-greyDark-1 truncate dark:text-white'>
                          {repo.name}
                        </p>
                      </div>
                      <p className='text-sm text-greyDark-2 truncate dark:text-gray-400'>
                        {repo.description}
                      </p>
                    </div>
                    <div className='inline-flex gap-x-2 items-center text-base font-semibold text-greyDark-1 dark:text-white'>
                      {repo.stargazers_count}
                      <BsStarFill className='text-gradient-orange w-4 h-4' />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div className='self-center'>
          <h2 className='text-greyDark-1 font-bold tracking-tight text-greyDark-1 text-sm md:text-xl'>
            User <span className='text-accent-color'>{username}</span> does not
            have public repositories
          </h2>
        </div>
      )}
    </main>
  )
}

export default RepositoriesPage