import { motion } from 'framer-motion'
import { Code2, Rocket, Layers } from 'lucide-react'
import Reveal from './Reveal'

const About = () => {
  const cards = [
    {
      icon: <Code2 size={28} />,
      title: 'Clean Development',
      desc: 'Writing scalable, reusable and maintainable code.',
    },
    {
      icon: <Rocket size={28} />,
      title: 'Performance',
      desc: 'Building fast and optimized web applications.',
    },
    {
      icon: <Layers size={28} />,
      title: 'Modern UI',
      desc: 'Creating beautiful and interactive interfaces.',
    },
  ]

  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <p className="text-violet-400 text-sm tracking-[4px] text-center">
            ABOUT ME
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-center mt-5">
            Beyond just <span className="gradient-text">coding.</span>
          </h2>

          <p className="text-gray-400 text-center max-w-2xl mx-auto mt-7 leading-8">
            I'm a passionate developer who enjoys turning complex
            problems into simple, beautiful and intuitive digital
            experiences. I love exploring new technologies and
            creating meaningful products.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-8 h-full group transition"
              >
                <div className="text-violet-400 mb-7 group-hover:scale-110 transition">
                  {card.icon}
                </div>

                <h3 className="text-xl font-bold">
                  {card.title}
                </h3>

                <p className="text-gray-500 mt-4 leading-7">
                  {card.desc}
                </p>
              </motion.div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

export default About
