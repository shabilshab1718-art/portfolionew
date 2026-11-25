import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experience = [
  {
    year: '2025 - Present',
    role: 'Full Stack Developer',
    company: 'Company Name',
    description:
      'Building scalable web applications using React, Node.js and modern technologies.',
  },
  {
    year: '2024 - 2025',
    role: 'Frontend Developer',
    company: 'Company Name',
    description:
      'Developing responsive user interfaces and improving website performance.',
  },
  {
    year: '2023 - 2024',
    role: 'Web Development Intern',
    company: 'Company Name',
    description:
      'Learning and working on real-world web development projects.',
  },
]

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-[#080808]">
      <div className=" text-white max-w-4xl mx-auto">

        <Reveal>
          <p className="text-violet-400 text-sm tracking-[4px] text-center">
            MY JOURNEY
          </p>

          <h2 className="text-white md:text-6xl font-bold text-center mt-5">
            Work <span className="gradient-text">Experience.</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute left-[7px] top-3 bottom-3 w-px bg-gradient-to-b from-violet-500 to-transparent" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.15}>
                <motion.div
                  whileHover={{ x: 8 }}
                  className="relative pl-10"
                >
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-violet-500 border-4 border-[#080808] ring-2 ring-violet-500/30" />

                  <div className="glass p-7 rounded-2xl">
                    <span className="text-violet-400 text-sm">
                      {item.year}
                    </span>

                    <h3 className="text-xl font-bold mt-3">
                      {item.role}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      {item.company}
                    </p>

                    <p className="text-gray-500 mt-4 leading-7">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
