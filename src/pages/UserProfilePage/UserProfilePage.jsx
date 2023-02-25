import { useLoaderData } from 'react-router-dom'

function UserProfilePage() {
  const userProfileData = useLoaderData()
  console.log('userProfileData', userProfileData)

  return <>UserProfile</>
}

export default UserProfilePage
