import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import { useUsername } from '../hooks/useUsernameContext'
import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'

function FollowersPage() {
  const { username } = useUsername()
  const userFollowersData = useLoaderData()
  const [followers, setFollowers] = useState([])

  //pagination
  const [followersPerPage, setFollowersPerPage] = useState(7)
  const [currentPage, setCurrentPage] = useState(1)

  const indexOfLastFollower = currentPage * followersPerPage
  const indexOfFirstFollower = indexOfLastFollower - followersPerPage
  const currentFollowers = followers.slice(
    indexOfFirstFollower,
    indexOfLastFollower
  )

  //fetch data a second time because the API endpoint at https://api.github.com/users/{username}/followers only provides user logins and not their names
  useEffect(() => {
    const fetchFollowers = async () => {
      try {
        const followerData = await Promise.all(
          userFollowersData.map(async (follower) => {
            const response = await axios.get(
              `https://api.github.com/users/${follower.login}`,
              {
                headers: {
                  Authorization: `Token ${process.env.REACT_APP_ACCESS_KEY}`,
                },
              }
            )
            const data = response.data
            return data
          })
        )
        setFollowers(followerData)
      } catch (error) {
        console.error(error)
      }
    }
    fetchFollowers()
  }, [userFollowersData])

  return (
    <main className='flex-grow bg-greyLight-1 flex items-start justify-center dark:bg-greyDark-3'>
      {userFollowersData.length ? (
        <div className='w-[90%] max-w-md p-4 shadow-outer-shadow rounded-lg mt-10 sm:p-8 dark:bg-greyDark-3 dark:shadow-outer-shadow-dark'>
          <div className='flex items-center justify-between mb-4'>
            <h5 className='text-xl font-bold leading-none text-greyDark-2 dark:text-white'>
              <span className='text-accent-color'>{username} </span> has{' '}
              {userFollowersData.length} followers:
            </h5>
          </div>
          <div className='flow-root'>
            <ul className='divide-y divide-greyLight-2 dark:divide-accent-color'>
              {currentFollowers.map((follower) => (
                <li className='py-3 sm:py-4' key={follower.id}>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-10 h-10 rounded-lg shadow-outer-shadow dark:shadow-outer-shadow-dark'
                        src={follower.avatar_url}
                        alt={`${follower.login} avatar`}
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <p className='text-sm font-medium text-greyDark-1 truncate dark:text-white'>
                        {follower.name || <i>name not found</i>}
                      </p>
                      <p className='text-sm text-greyDark-2 truncate dark:text-gray-400'>
                        {follower.login}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Pagination
            currentPage={currentPage}
            currentFollowers={currentFollowers}
            setCurrentPage={setCurrentPage}
            followersPerPage={followersPerPage}
          />
        </div>
      ) : (
        <div className='self-center'>
          <h2 className='text-greyDark-1 font-bold tracking-tight text-greyDark-1 text-lg md:text-xl'>
            User <span className='text-accent-color'>{username}</span> does not
            have followers
          </h2>
        </div>
      )}
    </main>
  )
}

export default FollowersPage
