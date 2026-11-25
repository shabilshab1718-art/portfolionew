import { motion } from 'framer-motion' 
import { ArrowDown } from 'lucide-react'

const Hero = () => { return ( <section id="home" className="min-h-screen flex items-center px-6 pt-28 relative overflow-hidden"

>
  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

  <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 items-center gap-16">

    <div className="relative z-10">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-3 border border-white/10 rounded-full px-4 py-2 mb-8"
      >
        <span className="w-2 h-2 bg-green-400 rounded-full animate" />
        <span className="text-xs text-gray-400 tracking-wide">
          AVAILABLE FOR WORK
        </span>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-400 text-lg mb-4"
      >
        Hello, I'm Shabil 
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-[1.1] tracking-tight"
      >
        Building
        <br />
        Digital
        <br />
        <span className="gradient-text">Experiences.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-gray-400 mt-7 leading-8 max-w-lg"
      >
        I'm a creative Full Stack Developer specializing in
        building modern, interactive and high-performance
        digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="flex flex-wrap gap-4 mt-9"
      >
        <a
          href="#projects"
          className="flex items-center gap-3 bg-white text-black px-7 py-4 rounded-full font-semibold hover:bg-violet-400 transition duration-300"
        >
          Explore Work
        </a>
      </motion.div>

    </div>

    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center"
    >
      <div className="absolute w-80 h-80 md:w-[430px] md:h-[430px] rounded-full bg-violet-600/20 blur-[100px] pulse-glow" />

      <div className="relative glass rounded-[40px] p-4 float-animation">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700"
          alt="Profile"
          className="w-72 h-80 md:w-96 md:h-[450px] object-cover rounded-[30px] grayscale hover:grayscale-0 transition duration-700"
        />
      </div>

      <div className="absolute bottom-8 -left-2 md:left-0 glass rounded-2xl p-4">
        <p className="text-2xl font-bold ">03+</p>
        <p className="text-xs text-gray-400 ">Years Experience</p>
      </div>

      <div className="absolute top-8 -right-2 md:right-0 glass rounded-2xl p-4">
        <p className="text-sm font-semibold gradient-text">React.js</p>
        <p className="text-xs text-gray-400">Developer</p>
      </div>
    </motion.div>

  </div>

  <a
    href="#about"
    className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 animate-bounce"
    aria-label="Scroll to about"
  >
    <ArrowDown />
  </a>
</section>


) }

export default Hero