'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { saveToCookie } from '@/util/saveOnCookies'
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isLightTheme = theme === 'light'

  const toggleTheme = () => {
    setTheme(isLightTheme ? 'dark' : 'light')
    saveToCookie('preferedTheme', isLightTheme ? 'dark' : 'light')
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      {mounted ? (
        <div
          className="relative flex h-8 w-16 cursor-pointer items-center rounded-full bg-[#F6F6F7] p-1 transition-all duration-500"
          style={{ backgroundColor: 'var(--bg-color)' }}
          onClick={toggleTheme}
        >
          <Moon className="text-[#3C3C47]" size={18} />

          <div
            className="absolute h-6 w-6 rounded-full bg-white shadow-md dark:bg-medium"
            style={{
              transition: 'left cubic-bezier(0.4, 0, 1, 1) .35s',
              left: theme === 'dark' ? '2px' : 'calc(100% - 26px)',
            }}
          ></div>
          <Sun className="ml-auto text-yellow-400" size={18} />
        </div>
      ) : (
        <div
          className="relative flex h-8 w-16 cursor-pointer items-center rounded-full bg-[#F6F6F7] p-1 transition-all duration-500"
          style={{ backgroundColor: 'var(--bg-color)' }}
          onClick={toggleTheme}
        >
          <Moon className="text-[#3C3C47]" size={18} />
          <Sun className="ml-auto text-yellow-400" size={18} />
        </div>
      )}
    </>
  )
}

export default ThemeToggle
