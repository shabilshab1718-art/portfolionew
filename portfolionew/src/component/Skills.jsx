import { motion } from 'framer-motion'
import Reveal from './Reveal'

const skills = [
  { name: 'HTML5', level: '95%' },
  { name: 'CSS3', level: '90%' },
  { name: 'JavaScript', level: '85%' },
  { name: 'React.js', level: '90%' },
  { name: 'Tailwind CSS', level: '95%' },
  { name: 'Node.js', level: '75%' },
  { name: 'MongoDB', level: '70%' },
  { name: 'Git & GitHub', level: '85%' },
]

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-[#080808]">
      <div className=" text-white max-w-6xl mx-auto ">

        <Reveal>
          <p className="text-violet-400 text-sm tracking-[4px] text-center">
            MY EXPERTISE
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold text-center mt-5">
            My <span className="gradient-text">Skills.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 mt-16">
          {skills.map((skill, index) => (
            <Reveal key={skill.name} delay={index * 0.08}>
              <div>
                <div className="flex justify-between mb-4">
                  <span className="font-medium">
                    {skill.name}
                  </span>

                  <span className="text-gray-500 text-sm">
                    {skill.level}
                  </span>
                </div>

                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: skill.level }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.3,
                      delay: 0.2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-indigo-400"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
