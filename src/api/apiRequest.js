import axios from 'axios'

const BASE_URL = 'https://api.github.com/users'

export const getUserProfile = async (username) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${username}`, {
      headers: {
        Authorization: `Token ${process.env.REACT_APP_ACCESS_KEY}`,
      },
    })

    console.log(data)
    return data
  } catch (error) {
    if (error.response.status === 403) {
      console.error(error.message)
      throw new Error('API rate limit exceeded')
    } else {
      console.error('Error loading user profile:', error)
      throw new Error('Could not load user profile')
    }
  }
}

export const getUserRepositories = async (username) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${username}/repos`, {
      headers: {
        Authorization: `Token ${process.env.REACT_APP_ACCESS_KEY}`,
      },
    })
    return data
  } catch (error) {
    if (error.response.status === 403) {
      console.error(error.message)
      throw new Error('API rate limit exceeded')
    } else {
      console.error('Error loading repositories:', error)
      throw new Error('Could not load repositories')
    }
  }
}

export const getUserFollowers = async (username) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/${username}/followers`, {
      headers: {
        Authorization: `Token ${process.env.REACT_APP_ACCESS_KEY}`,
      },
    })
    return data
  } catch (error) {
    if (error.response.status === 403) {
      console.error(error.message)
      throw new Error('API rate limit exceeded')
    } else {
      console.error('Error loading followers:', error)
      throw new Error('Could not load followers')
    }
  }
}
