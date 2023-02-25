import { useLoaderData } from 'react-router-dom'

function RepositoriesPage() {
  const userRepositoriesData = useLoaderData()
  console.log('userRepositoriesData', userRepositoriesData)

  return <div>RepositoriesPage</div>
}

export default RepositoriesPage
