import { ArrowUp } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-9 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <a href="#home" className="text-2xl font-bold">
          PORTFOLIO<span className="text-violet-500">.</span>
        </a>
        <div className="flex items-center gap-5">
         <a
            href="#home"
            aria-label="Back to top"
            className="bg-violet-600 p-3 rounded-full hover:bg-violet-500 transition"
          >
            <ArrowUp size={17} />
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
