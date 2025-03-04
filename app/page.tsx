'use client'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import ExpertiseSection from './components/ExpertiseSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <ExpertiseSection />
        <ProjectsSection />
      </main>
    </div>
  )
}

