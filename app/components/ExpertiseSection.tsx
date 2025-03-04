"use client"

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const features = [
  "Build cross-platform mobile apps (iOS & Android) using Flutter",
  "Develop web applications with responsive design and robust backend integration",
  "Manage end-to-end product development, ensuring timely delivery and client satisfaction",
  "Collaborate with teams to create scalable, user-centric solutions"
]

export default function ExpertiseSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">
            Bringing Ideas to Life
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
            I specialize in creating <span className="font-medium text-primary">web applications</span>, <span className="font-medium text-primary">hybrid iOS applications</span>, and <span className="font-medium text-primary">Android applications</span>. With a strong background in <span className="font-medium text-primary">Flutter development</span> and <span className="font-medium text-primary">end-to-end project management</span>, I oversee the entire product lifecycle—from concept to deployment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="w-2 h-2 bg-primary rounded-full mt-2" />
              <p className="text-zinc-600 dark:text-zinc-400">{feature}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Button className="px-8 py-6 text-lg" variant="default">
            Let's Turn Your Vision into Reality
          </Button>
        </motion.div>
      </div>
    </section>
  )
}