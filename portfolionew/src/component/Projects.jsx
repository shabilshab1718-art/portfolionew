import { motion } from 'framer-motion'
 import { ArrowUpRight } from 'lucide-react'
  import Reveal from './Reveal'

const projects = [ { number: '01', title: 'E-Commerce Platform', category: 'FULL STACK DEVELOPMENT', description: 'A modern online shopping experience with product management, cart and checkout.', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900', tech: ['React', 'Tailwind', 'Node.js'], demo: 'https://example.com', }, { number: '02', title: 'Analytics Dashboard', category: 'FRONTEND DEVELOPMENT', description: 'A clean and interactive dashboard for visualizing business analytics.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900', tech: ['React', 'JavaScript', 'CSS'], demo: 'https://example.com', }, { number: '03', title: 'Travel Explorer', category: 'WEB DESIGN & DEVELOPMENT', description: 'A visually engaging travel platform for discovering destinations.', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=900', tech: ['React', 'Tailwind', 'API'], demo: 'https://example.com', }, ]

const Projects = () => { return ( <section id="projects" className="section-padding"> <div className="max-w-6xl mx-auto">

    <Reveal>
      <p className="text-violet-400 text-sm tracking-[4px] text-center">
        SELECTED WORK
      </p>

      <h2 className="text-4xl md:text-6xl font-bold text-center mt-5">
        Featured <span className="gradient-text">Projects.</span>
      </h2>

      <p className="text-gray-500 text-center mt-6">
        A collection of projects I've worked on.
      </p>
    </Reveal>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-16">

      {projects.map((project, index) => (
        <Reveal key={project.number} delay={index * 0.15}>
          <motion.div
            whileHover={{ y: -10 }}
            className="glass rounded-3xl overflow-hidden group h-full"
          >

            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-56 object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition duration-700"
              />

              <span className="absolute top-5 left-5 text-white text-sm glass px-4 py-2 rounded-full">
                {project.number}
              </span>
            </div>

            <div className="p-7">

              <p className="text-violet-400 text-xs tracking-widest">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold mt-4">
                {project.title}
              </h3>

              <p className="text-gray-500 text-sm leading-7 mt-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-5">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-300 border border-white/10 rounded-full px-3 py-2"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-7 pt-5 border-t border-white/10">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2 items-center text-sm text-gray-400 hover:text-violet-400 transition"
                >
                  Live Demo <ArrowUpRight size={17} />
                </a>
              </div>

            </div>
          </motion.div>
        </Reveal>
      ))}

    </div>
  </div>
</section>


) }

export default Projects