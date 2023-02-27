import { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState(sessionStorage.getItem('username'))

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUsername = () => useContext(UserContext)
