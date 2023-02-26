import React from 'react'
import SearchForm from './SearchForm'

function Search() {
  return (
    <main className='bg-greyLight-1 h-screen w-screen flex flex-col items-center justify-center gap-y-8'>
      <h1 className='text-transparent font-semibold bg-clip-text bg-gradient-to-r from-accent-color via-gradient-pink to-gradient-orange text-xl sm:text-3xl'>
        GitHub Profile Search
      </h1>
      <SearchForm />
    </main>
  )
}

export default Search
