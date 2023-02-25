import { useUsername } from '../hooks/useUsernameContext'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SearchForm() {
  const [initialUsername, setInitialUsername] = useState('')
  const { setUsername } = useUsername()
  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setUsername(initialUsername)
    navigate(`/${initialUsername}`)
  }

  const onUpdateForm = (e) => {
    setInitialUsername(e.target.value)
  }

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmit(e)
    }
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type='search'
        onChange={onUpdateForm}
        placeholder='Search user...'
        onKeyPress={handleKeypress}
        value={initialUsername}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchForm
