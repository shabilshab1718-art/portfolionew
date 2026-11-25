import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    ['Home', '#home'],
    ['About', '#about'],
    ['Skills', '#skills'],
    ['Projects', '#projects'],
    ['Contact', '#contact'],
  ]

  return (
    <nav className="fixed top-0 w-full z-50 px-5">
      <div className="max-w-6xl mx-auto mt-5 glass rounded-2xl px-6 h-16 flex items-center justify-between">

        <a href="#home" className="text-2xl font-bold">
          PORTFOLIO<span className="text-violet-500">.</span>
        </a>

        <div className="hidden md:flex gap-8">
          {links.map(([name, url]) => (
            <a key={name} href={url}
              className="text-black-400 hover:text-white">
              {name}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden glass p-6 flex flex-col gap-5">
          {links.map(([name, url]) => (
            <a key={name} href={url}
              onClick={() => setOpen(false)}>
              {name}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
