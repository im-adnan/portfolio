import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image';

export const runtime = "edge"

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-between py-12">
      {/* <div className="space-y-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-sm font-light dark:text-zinc-400"
        >
          Currently Project Manager at
          <br />
          Pyramid Developers
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-sm font-light dark:text-zinc-400"
        >
          Based in Sahaswan
          <br />
          Uttar Pradesh, India
        </motion.div>
      </div> */}
      
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 mb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold tracking-tight dark:text-white mb-8 md:mb-0"
        >
          Hi, There, 👋
          <br />
         I'm SYED MOHD
         <br /> ADNAN
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="relative w-48 h-48 md:w-64 md:h-64"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 animate-pulse" />
          <Image
            src="https://avatars.githubusercontent.com/u/65073375?v=4"
            alt="Syed Mohd Adnan"
            width={256}
            height={256}
            className="relative rounded-full object-cover border-2 border-zinc-200 dark:border-zinc-800"
            priority
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <ArrowDown className="w-8 h-8 dark:text-zinc-400" />
          <p className="text-sm font-light max-w-[200px] dark:text-zinc-400">
            I SUPPORT TEAMS WITH FLUTTER AND FULL-STACK DEVELOPMENT
          </p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-right"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight dark:text-white">
            STUDENT
            <br />
            PROJECT MANAGER
            <br />
            DEVELOPER
          </h2>
        </motion.div>
      </div>
    </section>
  )
}

