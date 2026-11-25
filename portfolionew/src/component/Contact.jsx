import { motion } from 'framer-motion'
import { Mail, MapPin, ArrowUpRight, Send } from 'lucide-react'
import Reveal from './Reveal'

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">

        <Reveal>
          <p className=" fond-bold text-violet-600 text-sm tracking-[4px] text-center">
            CONTACT ME
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-center mt-5">
            Let's create <span className="gradient-text">something.</span>
          </h2>

        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          <Reveal>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">
                Let's talk about your project.
              </h3>

              <p className="text-gray-500 leading-8">
                I'm always interested in new opportunities,
                creative projects and collaborations.
              </p>

              <div className="flex items-center gap-5">
                <div className="glass p-4 rounded- black text-red-400">
                  <Mail />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Email</p>
                  <p>yourmail@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <div className="glass p-4 rounded-xl text-violet-400">
                  <MapPin />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">Location</p>
                  <p>Kerala, India</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <motion.form
              whileHover={{ borderColor: 'rgba(97, 72, 154, 0.4)' }}
              action="https://formsubmit.co/yourmail@example.com"
              method="POST"
              className="glass p-8 rounded-3xl space-y-6"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full bg-white/[0.03] border border-gray-300/10 p-4 rounded-4xl outline-none focus:border-red-500 transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full bg-white/[0.03] border border-gray-300/10 p-4 rounded-4xl outline-none focus:border-red-500 transition"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about your project..."
                required
                className="w-full bg-white/[0.03] border border-gray-300/10 p-4 rounded-4l outline-none focus:border-red-500 transition resize-none"
              />

              <button
                type="submit"
                className="w-full flex justify-center items-center gap-3 bg-white text-black p-4 rounded-xl font-semibold hover:bg-violet-400 transition"
              >
                Send Message <Send size={18} />
              </button>
            </motion.form>
          </Reveal>

        </div>
      </div>
    </section>
  )
}

export default Contact
