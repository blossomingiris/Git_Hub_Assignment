import { useLoaderData } from 'react-router-dom'

function FollowersPage() {
  const userFollowersData = useLoaderData()
  console.log('userFollowersData', userFollowersData)

  return <div>FollowersPage</div>
}

export default FollowersPage
