import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'

interface NavigationProps {
  isDarkMode: boolean
  setIsDarkMode: (value: boolean) => void
}

export default function Navigation({ isDarkMode, setIsDarkMode }: NavigationProps) {
  const pathname = usePathname()

  return (
    <nav className="container mx-auto px-4 py-8 flex justify-end items-center">
      <div className="flex items-center gap-8">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="p-2 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
          aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {isDarkMode ? <Sun className="w-5 h-5 text-zinc-400" /> : <Moon className="w-5 h-5" />}
        </button>
        <div className="flex gap-6 text-sm">
          <Link 
            href="/" 
            className={`hover:text-zinc-600 dark:hover:text-zinc-200 ${
              pathname === '/' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            Home
          </Link>
          <Link 
            href="/work" 
            className={`hover:text-zinc-600 dark:hover:text-zinc-200 ${
              pathname === '/work' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            Work
          </Link>
          <Link 
            href="/about" 
            className={`hover:text-zinc-600 dark:hover:text-zinc-200 ${
              pathname === '/about' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            About
          </Link>
          <Link 
            href="/contact" 
            className={`hover:text-zinc-600 dark:hover:text-zinc-200 ${
              pathname === '/contact' ? 'text-zinc-900 dark:text-white' : 'text-zinc-600 dark:text-zinc-400'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

