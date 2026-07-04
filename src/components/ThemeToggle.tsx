import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/lib/theme"

export default function ThemeToggle() {
  const { theme, toggle } = useTheme()

  return (
    <button
      onClick={toggle}
      className="fixed top-4 right-4 z-50 p-3 rounded-full border border-zinc-800 dark:border-zinc-800 bg-zinc-900 dark:bg-zinc-900 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all backdrop-blur-sm"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  )
}
