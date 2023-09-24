'use client'

import { useContext } from 'react'
import { ThemeContext } from '@/lib/theme-provider'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

interface ToggleThemeProps {
  title?: string
}

const ToggleTheme = ({ title }: ToggleThemeProps) => {
  const { toggle, theme } = useContext(ThemeContext)
  return (
    <div
      className={`${
        title ? 'inline-flex gap-4 items-center cursor-pointer' : 'flex'
      }`}
      onClick={toggle}
    >
      {theme === 'dark' ? (
        <BsFillSunFill size={25} color="orange" />
      ) : (
        <BsFillMoonFill size={25} color="blue" />
      )}
      {title}
    </div>
  )
}

export default ToggleTheme
