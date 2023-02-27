import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { useUsername } from '../hooks/useUsernameContext'

import { FaGithubAlt } from 'react-icons/fa'
import { BsSearch } from 'react-icons/bs'

function SearchForm() {
  const [initialUsername, setInitialUsername] = useState('')
  const { setUsername } = useUsername()
  const navigate = useNavigate()

  const handleFormSubmit = (e) => {
    e.preventDefault()
    setUsername(initialUsername)
    sessionStorage.setItem('username', initialUsername)
    navigate(`${initialUsername}`)
  }

  const onUpdateForm = (e) => {
    setInitialUsername(e.target.value.trim())
  }

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      handleFormSubmit(e)
    }
  }

  return (
    <form className='flex items-center' onSubmit={handleFormSubmit}>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <FaGithubAlt className='w-5 h-5 text-accent-color' />
        </div>
        <input
          type='text'
          className='bg-greyLight-1 shadow-inner-shadow text-greyDark-1 text-sm rounded-lg outline-none focus:shadow-outer-shadow transition-shadow ease-in-out duration-100 h-10 w-12 rounded-full bg-transparent pl-12 outline-none focus:w-full focus:pl-12 focus:pr-4 dark:focus:shadow-outer-shadow-dark dark:shadow-inner-shadow-dark dark:text-white dark:placeholder-gray-300'
          placeholder='Enter username...'
          onChange={onUpdateForm}
          onKeyPress={handleKeypress}
          value={initialUsername}
          required
        />
      </div>
      <button className='p-3 ml-2 rounded-lg shadow-outer-shadow text-greyDark-2 font-extrabold text-sm focus:outline-none focus:shadow-inner-shadow transition-scale ease-in-out duration-100 dark:shadow-outer-shadow-dark dark:text-accent-color dark:focus:shadow-inner-shadow-dark'>
        <BsSearch className='w-4 h-4' />
      </button>
    </form>
  )
}

export default SearchForm
