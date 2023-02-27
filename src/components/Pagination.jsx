import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

function Pagination({
  currentPage,
  currentRepositories,
  setCurrentPage,
  repositoriesPerPage,
  currentFollowers,
  followersPerPage,
}) {
  return (
    <div className='flex justify-center'>
      {currentPage > 1 && (
        <button
          className='p-3 text-sm font-medium text-greyDark-2 rounded-lg shadow-outer-shadow outline-none focus:outline-none transition-scale ease-in-out duration-100 hover:text-accent-color dark:shadow-outer-shadow-dark'
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <IoIosArrowBack />
        </button>
      )}
      {currentRepositories?.length ? (
        currentRepositories.length < repositoriesPerPage ? undefined : (
          <button
            className='p-3 text-sm font-medium text-greyDark-2 rounded-lg shadow-outer-shadow outline-none focus:outline-none transition-scale ease-in-out duration-100 ml-4 hover:text-accent-color dark:shadow-outer-shadow-dark'
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <IoIosArrowForward />
          </button>
        )
      ) : currentFollowers?.length < followersPerPage ? undefined : (
        <button
          className='p-3 text-sm font-medium text-greyDark-2 rounded-lg shadow-outer-shadow outline-none focus:outline-none transition-scale ease-in-out duration-100 ml-4 hover:text-accent-color dark:shadow-outer-shadow-dark'
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <IoIosArrowForward />
        </button>
      )}
    </div>
  )
}

export default Pagination
