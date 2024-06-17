import ThemeToggle from '@/components/ThemeToggle/themeToggle'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home',
}

export default function HomeToggle() {
  return (
    <div className="flex h-screen items-center justify-center gap-3">
      <h1 className="font-bold">TOGGLE THEME!!</h1>
      <div className="h-6 w-[1px] bg-dark dark:bg-white" />
      <ThemeToggle />
    </div>
  )
}
