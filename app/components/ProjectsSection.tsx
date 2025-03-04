import { motion } from 'framer-motion'
import Image from 'next/image'

const projects = [
  {
    title: 'Revhealth',
    description: 'Hospital insurance verification platform',
    image: '/revhealth.png',
    url: '#'
  },
  {
    title: 'VocalCode',
    description: 'English Language Learning Platform',
    image: '/vocalcode.png',
    url: 'https://vocalcode.co.in/'
  }
]

export default function ProjectsSection() {
  return (
    <section id="work" className="py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-12 dark:text-white"
      >
        Selected Work
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group"
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold dark:text-white">{project.title}</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>
                </div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400 group-hover:translate-x-2 transition-transform duration-300">
                  View Project →
                </span>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

