'use client'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const projects = [
  {
    name: 'Yeotaskin Agent',
    description: 'Developed a comprehensive mobile application for Yeotaskin agents that handles user authentication, product purchases, inventory management, and sales tracking. The app features a dual-wallet system with Income and E-wallet functionality, along with detailed sales information tracking for both individual and team performance.',
    image: '/yeotaskin.png',
    website: 'https://yeotaskin.com/',
    appLink: 'https://play.google.com/store/apps/details?id=com.ztoo.yeotaskin',
  },
  {
    name: 'Anemix',
    description: "Oversaw the creation of a women's health platform (React website and mobile app) to track period-related information and connect users with experts for health consultations.",
    image: '/anemix.png',
    website: 'https://anemix.vercel.app/',
    appLink: null,
  },
  {
    name: 'Nbrly',
    description: 'Managed the development of a Flutter-based dating app using location services for nearby connections, chat features, and user feedback mechanisms.',
    image: '/nbrly.png',
    website: 'https://www.nbrlyapp.com/',
    appLink: 'https://play.google.com/store/apps/details?id=com.pyramid.nbrly',
  },
  {
    name: 'Snacc',
    description: 'Led the front-end Flutter development, connecting with MINT Backend (Meal Insight & Nutritional Tracker) for nutrition and health scoring via AI-based image analysis.',
    image: '/snacc.png',
    website: 'https://snacc.fit/',
    appLink: 'https://app.snacc.fit/',
  },
  {
    name: 'Lexpal',
    description: 'Supervised development of a React website connecting global users for language learning and knowledge exchange through video calls and AI-generated translations.',
    image: '/lexpal.png',
    website: null,
    appLink: 'https://app.lexpal.ai/',
  },
  {
    name: 'Athenagen.ai',
    description: 'Oversaw the creation of a website using React and AWS Amplify to generate AI-driven advertising prompts and images based on user inputs.',
    image: '/athena.png',
    website: 'https://www.athenagen.ai/',
    appLink: null,
  },
  {
    name: 'Revhealth',
    description: 'Managed the development of a React-based hospital insurance verification platform, though the project was later abandoned by the client.',
    image: '/revhealth.png',
    website: null,
    appLink: null,
  },
  {
    name: 'Trash To Cash',
    description: 'Trash To Cash helps environmental sustainability by recycling non-biodegradable waste. The app allows users to book waste pick-ups, and track status responsible disposal. Available across Bangalore, the platform also includes a dedicated app for pickup partners to manage locations and bookings in real-time.',
    image: '/trash2cash.png',
    website: 'http://www.trashtocash.co.in/',
    appLink: 'https://play.google.com/store/apps/details?id=com.pyramid.trashtocash&hl=en',
  },
  {
    name: 'AltFit',
    description: 'Assisted in creating AWS Lambda functions to extract exercise data from Airtable and provided backend support via AWS Amplify.',
    image: '/altfit.png',
    website: 'https://www.altfit.club/',
    appLink: 'https://apps.apple.com/in/app/altfit-club/id6460010075',
  },
  {
    name: 'Copper',
    description: 'Built onboarding, Swipe Profile and Chat Functionality using Flutter and integrated Firebase Authentication for phone and email verification.',
    image: '/copper.png',
    website: 'https://copper-a594e.web.app/',
    appLink: 'https://play.google.com/store/apps/details?id=com.pyramid.copper&hl=en',
  },
  {
    name: 'Poolpay',
    description: "Developed the frontend with Flutter and integrated Firebase Authentication and Firestore for database management. Wrote cloud functions to handle data transactions with Decentro's API Banking Platform and implemented group messaging.",
    image: '/poolpay.jpeg',
    website: 'https://poolpay.in/',
    appLink: 'https://play.google.com/store/apps/details?id=com.pyramid.poolpay&hl=en',
  },
  {
    name: 'VocalCode',
    description: 'Developed VocalCode mobile app connects English language learners with expert educators through video calling and personal tests. It offers a user-friendly platform for high-quality language instruction, enhancing communication and fostering a global learning community.',
    image: '/vocalcode.png',
    website: 'https://vocalcode.co.in/',
    appLink: 'https://play.google.com/store/apps/details?id=com.app.vocalcode',
  },
]

export default function WorkPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-6xl font-bold mb-12 dark:text-white bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-[1.1] pb-2"
      >
        Projects I’ve Worked On
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-zinc-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={`${project.name} project screenshot`}
                width={600}
                height={400}
                className="object-cover transform group-hover:scale-105 transition-all duration-500 hover:brightness-90"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 dark:text-white">{project.name}</h2>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.website && (
                  <Link
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-md text-sm hover:bg-gradient-to-r hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Visit Website
                  </Link>
                )}
                {project.appLink && (
                  <Link
                    href={project.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-md text-sm hover:bg-gradient-to-r hover:from-green-600 hover:to-teal-600 transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    View App
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

