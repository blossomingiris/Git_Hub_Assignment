import SearchForm from '../components/SearchForm'
import SwitchMode from '../components/SwitchMode'

function SearchPage() {
  return (
    <main className='bg-greyLight-1 h-screen w-screen flex flex-col items-center justify-center gap-y-8 dark:bg-greyDark-3'>
      <h1 className='text-transparent font-semibold bg-clip-text bg-gradient-to-r from-accent-color via-gradient-pink to-gradient-orange text-xl sm:text-3xl'>
        GitHub Profile Search
      </h1>
      <SearchForm />
      <SwitchMode />
    </main>
  )
}

export default SearchPage
