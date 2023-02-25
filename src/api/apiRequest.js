import axios from 'axios'

export const getUserProfile = async (username) => {
  try {
    const { data } = await axios.get(`https://api.github.com/users/${username}`)
    return data
  } catch (error) {
    console.error('Error loading user profile:', error)
    throw new Error('Could not load user profile')
  }
}

export const getUserRepositories = async (username) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/repos`
    )
    return data
  } catch (error) {
    console.error('Error loading repositories:', error)
    throw new Error('Could not load repositories')
  }
}

export const getUserFollowers = async (username) => {
  try {
    const { data } = await axios.get(
      `https://api.github.com/users/${username}/followers`
    )
    return data
  } catch (error) {
    console.error('Error loading followers:', error)
    throw new Error('Could not load followers')
  }
}
