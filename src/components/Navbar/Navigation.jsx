import { useUsername } from '../../hooks/useUsernameContext'
import SearchForm from '../Search/SearchForm'
import { BsSearch } from 'react-icons/bs'
import { FaHamburger, FaUsers } from 'react-icons/fa'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { BsFolderFill, BsPersonFill } from 'react-icons/bs'
import { useState } from 'react'

function Navigation() {
  const { username } = useUsername()
  const [expandMenu, setExpandMenu] = useState(false)
  const [expandSearch, setExpandSearch] = useState(false)
  const navigate = useNavigate()

  const toggleExpand = (type) => {
    if (type === 'menu') {
      setExpandMenu(!expandMenu)
    } else if (type === 'search') {
      setExpandSearch(!expandSearch)
    }
  }

  const navigateHandler = (link) => {
    navigate(link)
    setExpandMenu(false)
  }

  return (
    <nav className='bg-greyLight-1 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
      <div className='container flex items-center justify-between mx-auto'>
        <h2 className='text-transparent font-semibold bg-clip-text bg-gradient-to-r from-accent-color via-gradient-pink to-gradient-orange text-sm sm:text-xl'>
          GitHub Profile Viewer
        </h2>
        <div className='flex md:order-2 gap-x-2'>
          <SearchForm />
          {/* <button
            onClick={() => toggleExpand('search')}
            className={`md:hidden text-greyDark-2 transition-shadow ease-in-out duration-300 focus:outline-none focus-inner-shadow rounded-lg text-sm p-2.5 mr-1  ${
              expandSearch ? 'shadow-inner-shadow' : 'hover:shadow-outer-shadow'
            }`}
          >
            <BsSearch className='w-4 h-4' />
          </button> */}
          <div>
            <button
              onClick={() => toggleExpand('menu')}
              className={`inline-flex items-center p-3 text-sm text-greyDark-2 rounded-lg md:hidden transition-shadow ease-in-out duration-300 focus:outline-none focus-inner-shadow ${
                expandMenu ? 'shadow-inner-shadow' : 'hover:shadow-outer-shadow'
              }`}
            >
              <FaHamburger className='w-4 h-4' />
            </button>
            {expandMenu ? (
              <ul className='w-[50%] flex flex-col absolute top-[70px] right-[20px] bg-greyLight-1 font-bold z-50 float-left py-3 list-none text-left rounded-lg shadow-lg bg-clip-padding border-none md:hidden'>
                <li
                  onClick={() => navigateHandler(username)}
                  className='text-sm py-2 px-4 rounded-lg font-normal block w-full whitespace-nowrap text-greyDark-1 hover:text-accent-color transition-color ease-in-out duration-200 flex items-center gap-x-3 cursor-pointer'
                >
                  <BsPersonFill className='w-4 h-4' /> User Profile
                </li>
                <li
                  onClick={() => navigateHandler(`${username}/repositories`)}
                  className='text-sm py-2 px-4 rounded-lg font-normal block w-full whitespace-nowrap text-greyDark-1 hover:text-accent-color transition-color ease-in-out duration-200 flex items-center gap-x-3 cursor-pointer'
                >
                  <BsFolderFill className='w-4 h-4' />
                  Repositories
                </li>
                <li
                  onClick={() => navigateHandler(`${username}/followers`)}
                  className='text-sm py-2 px-4 rounded-lg font-normal block w-full whitespace-nowrap text-greyDark-1  hover:text-accent-color transition-color ease-in-out duration-200 flex items-center gap-x-3 cursor-pointer'
                >
                  <FaUsers className='w-4 h-4' />
                  Followers
                </li>
              </ul>
            ) : undefined}
          </div>
        </div>
        <div className='items-center justify-between hidden w-full md:flex md:w-auto md:order-1'>
          <ul className='flex flex-col p-4 mt-4 border bg-greyLight-1 font-bold  md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium md:border-0'>
            <li>
              <NavLink
                to={`${username}`}
                className={(isActive) =>
                  `block p-3 pl-3 pr-4 text-white bg-blue-700 font-bold rounded hover:shadow-outer-shadow transition-shadow ease-in-out duration-300 md:bg-transparent md:text-accent-color md:px-4 md:py-2.5 ${
                    isActive ? 'focus:shadow-inner-shadow' : undefined
                  }`
                }
                end
              >
                User Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${username}/repositories`}
                className={(isActive) =>
                  `block p-3 pl-3 pr-4 text-white bg-blue-700 font-bold rounded hover:shadow-outer-shadow transition-shadow ease-in-out duration-300 md:bg-transparent md:text-accent-color md:px-4 md:py-2.5 ${
                    isActive ? 'focus:shadow-inner-shadow' : undefined
                  }`
                }
              >
                Repositories
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${username}/followers`}
                className={(isActive) =>
                  `block p-3 pl-3 pr-4 text-white bg-blue-700 font-bold rounded hover:shadow-outer-shadow transition-shadow ease-in-out duration-300 md:bg-transparent md:text-accent-color md:px-4 md:py-2.5 ${
                    isActive ? 'focus:shadow-inner-shadow' : undefined
                  }`
                }
              >
                Followers
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
