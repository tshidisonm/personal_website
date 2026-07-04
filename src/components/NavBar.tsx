import { Menu, X } from "lucide-react"
import { useState } from "react"

const links = [
  { label: "Home", href: "#" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#certifications" },
  { label: "References", href: "#references" },
  { label: "Gallery", href: "#gallery" },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-800/50 rounded-full shadow-lg shadow-black/5 dark:shadow-black/20">
        <div className="hidden md:flex items-center gap-1 px-2 h-12">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="md:hidden flex items-center justify-center h-12 px-4">
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden mt-2 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-gray-200/50 dark:border-zinc-800/50 rounded-2xl shadow-lg px-4 py-4 space-y-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-600 dark:text-zinc-400 hover:text-black dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
