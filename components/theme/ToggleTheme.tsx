'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/lib/theme-provider'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
const ToggleTheme = () => {
  const { toggle, theme } = useContext(ThemeContext)
  return (
    <div className="flex" onClick={toggle}>
      {theme === 'dark' ? (
        <BsFillSunFill size={25} color="orange" />
      ) : (
        <BsFillMoonFill size={25} color="blue" />
      )}
    </div>
  )
}

export default ToggleTheme
