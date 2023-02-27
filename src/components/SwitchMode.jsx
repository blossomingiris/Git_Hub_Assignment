import { useState } from 'react'
import { HiOutlineLightBulb, HiLightBulb } from 'react-icons/hi'
import useDarkMode from '../hooks/useDarkMode'

function SwitchMode() {
  const [colorTheme, setTheme] = useDarkMode()
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  )
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme)
    setDarkMode(checked)
  }

  return (
    <button
      checked={darkMode}
      onClick={toggleDarkMode}
      className='p-3 rounded-full shadow-outer-shadow text-greyDark-2 font-extrabold text-sm focus:outline-none transition-scale ease-in-out duration-100 dark:shadow-outer-shadow-dark dark:text-accent-color dark:focus:shadow-inner-shadow-dark'
    >
      {colorTheme === 'light' ? (
        <HiOutlineLightBulb className='h-5 w-5' />
      ) : (
        <HiLightBulb className='h-5 w-5' />
      )}
    </button>
  )
}

export default SwitchMode
