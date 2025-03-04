import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  CheckCircle,
  Users,
  Code,
  MessageSquare,
  Clock,
  Layers,
  UserPlus,
  GitBranch,
  Bug,
  GitPullRequest,
  Server,
  Users2,
  FileText,
  Rocket,
  Database,
  Globe,
  Upload,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 dark:text-white">ABOUT ME</h1>
                {/* Work Experience Section */}
                <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
            <span className="mr-2">💼</span> Work Experience
          </h2>

          {/* Project Manager */}
          <div className="mb-12 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Project Manager</h3>
              <div className="text-primary font-medium mt-1 md:mt-0">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2023-06 - Present</span>
              </div>
            </div>
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-4">Pyramid Developers</p>

            <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-4">Key Responsibilities:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <ResponsibilityItem text="Supervised development teams across various projects" icon="Users" />
              <ResponsibilityItem
                text="Led frontend and backend integration efforts, coordinating with developers on key features"
                icon="Code"
              />
              <ResponsibilityItem
                text="Collaborated closely with clients to ensure requirements were met"
                icon="MessageSquare"
              />
              <ResponsibilityItem text="Provided technical troubleshooting and solutions" icon="Bug" />
              <ResponsibilityItem text="Ensured adherence to timelines and project delivery milestones" icon="Clock" />
              <ResponsibilityItem
                text="Oversaw end-to-end project development from conception to delivery"
                icon="Layers"
              />
              <ResponsibilityItem
                text="Facilitated team collaboration to achieve project goals across diverse industries"
                icon="UserPlus"
              />
            </div>

            <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-4">
              Implemented Agile methodologies through:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <ResponsibilityItem
                text="Managing Trello & GitHub project boards, updating story statuses, and checking off completed tasks"
                icon="GitBranch"
              />
              <ResponsibilityItem
                text="Creating GitHub issues based on Trello user stories and managing branch workflows"
                icon="GitPullRequest"
              />
              <ResponsibilityItem
                text="Writing, building, debugging, and testing code changes on feature branches"
                icon="Code"
              />
              <ResponsibilityItem
                text="Coordinating code reviews, merging pull requests, and tracking bug reports for unresolved issues"
                icon="Bug"
              />
              <ResponsibilityItem
                text="Deploying code changes to development and staging environments, monitoring, and troubleshooting issues"
                icon="Server"
              />
              <ResponsibilityItem
                text="Leading stakeholder collaboration for refining requirements and user stories"
                icon="Users2"
              />
              <ResponsibilityItem
                text="Maintaining comprehensive project documentation, including progress updates and technical decisions"
                icon="FileText"
              />
            </div>

            <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-4">Notable Projects:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Anemix - Women's Health Platform"
                description="Oversaw the creation of a women's health platform (React website and mobile app) to track period-related information and connect users with experts for health consultations."
                website="https://anemix.vercel.app/"
              />

              <ProjectCard
                title="Nbrly - People Connection App"
                description="Managed the development of a Flutter-based dating app using location services for nearby connections, chat features, and user feedback mechanisms."
                website="https://www.nbrlyapp.com/"
                app="https://play.google.com/store/apps/details?id=com.pyramid.nbrly"
              />

              <ProjectCard
                title="Snacc - Nutrition & Health Tracker"
                description="Led the front-end Flutter development, connecting with MINT (Meal Insight & Nutritional Tracker) for nutrition and health scoring via AI-based image analysis."
                website="https://snacc.fit/"
                app="https://app.snacc.fit/"
              />

              <ProjectCard
                title="Lexpal - Language Learning Platform"
                description="Supervised development of a React website connecting global users for language learning and knowledge exchange through video calls and AI-generated translations."
                website="https://www.lexpal.ai/"
                app="https://app.lexpal.ai/"
              />

              <ProjectCard
                title="Athenagen.ai - Advertising Platform"
                description="Oversaw the creation of a website using React and AWS Amplify to generate AI-driven advertising prompts and images based on user inputs."
                website="https://www.athenagen.ai/"
              />

              <ProjectCard
                title="Revhealth - Insurance Verification Platform"
                description="Managed the development of a React-based hospital insurance verification platform, though the project was later abandoned by the client."
              />
            </div>
          </div>

          {/* Software Developer */}
          <div className="mb-12 bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">Software Developer</h3>
              <div className="text-primary font-medium mt-1 md:mt-0">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2022-08 - 2023-06</span>
              </div>
            </div>
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-4">Pyramid Developers</p>

            <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-4">Key Responsibilities:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <ResponsibilityItem
                text="Developed key features across platforms to enhance mobile applications using Flutter and Firebase"
                icon="Rocket"
              />
              <ResponsibilityItem
                text="Integrated third-party APIs, including payment gateways and KYC services"
                icon="Globe"
              />
              <ResponsibilityItem
                text="Worked with back-end services such as AWS Lambda and Firebase Cloud Functions"
                icon="Database"
              />
              <ResponsibilityItem
                text="Collaborated with other developers on frontend and backend aspects of the projects"
                icon="Users"
              />
              <ResponsibilityItem
                text="Provided deployment support to ensure successful app launches and updates"
                icon="Upload"
              />
            </div>

            <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-4">Key Projects:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Trash To Cash - Waste Management App"
                description="Trash To Cash helps you earn rewards while contributing to environmental sustainability by recycling non-biodegradable waste. The app allows users to book waste pick-ups, track status, and receive incentives for responsible disposal."
                website="http://www.trashtocash.co.in/"
                app="https://play.google.com/store/apps/details?id=com.pyramid.trashtocash"
              />

              <ProjectCard
                title="AltFit - Fitness App"
                description="Created AWS Lambda functions for exercise data extraction from Airtable, implemented personalized data filtering based on user criteria including weight and health goals, and provided backend support via AWS Amplify."
                website="https://www.altfit.club/"
                app="https://apps.apple.com/in/app/altfit-club/id6460010075"
              />

              <ProjectCard
                title="Copper - Dating App"
                description="Built comprehensive onboarding flow and swipe screens using Flutter, integrated Firebase Authentication with dual verification (phone and email), and implemented Firestore backend architecture for user data management."
                website="https://copper-a594e.web.app/"
                app="https://play.google.com/store/apps/details?id=com.pyramid.copper"
              />

              <ProjectCard
                title="Poolpay - Group Payment App"
                description="Developed the frontend with Flutter and integrated Firebase Authentication and Firestore for database management. Implemented comprehensive cloud functions for Decentro API integration."
                website="https://poolpay.in/"
                app="https://play.google.com/store/apps/details?id=com.pyramid.poolpay"
              />
            </div>
          </div>

          {/* Freelance Application Developer */}
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                Freelance Application Developer
              </h3>
              <div className="text-primary font-medium mt-1 md:mt-0">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">2021-02 - 2022-07</span>
              </div>
            </div>
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300 mb-4">VocalCode</p>

            <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-4">Key Responsibilities:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
              <ResponsibilityItem
                text="Developed front-end features for mobile applications using Flutter and Backend using Firebase"
                icon="Code"
              />
              <ResponsibilityItem text="Integrated Jitsi Meet Video Calling Api" icon="Globe" />
              <ResponsibilityItem text="Managed app publishing and updates on the Google Play Store" icon="Upload" />
              <ResponsibilityItem
                text="Provided ongoing support to ensure application functionality post-deployment"
                icon="CheckCircle"
              />
            </div>

            <h4 className="font-medium text-slate-700 dark:text-slate-200 mb-4">Key Project:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="VocalCode - English Learning Platform"
                description="Developed VocalCode mobile app connects English language learners with expert educators through video calling and personal tests. It offers a user-friendly platform for high-quality language instruction."
                website="https://vocalcode.co.in/"
                app="https://play.google.com/store/apps/details?id=com.app.vocalcode"
              />
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-8 flex items-center">
            <span className="mr-2">🛠️</span> Technical Skills
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-md p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SkillCard
                name="UI Design Tools"
                description="Proficient in translating UI concepts into functional components for responsive applications"
                technology="Figma, Flutter widgets, Responsive design, Media queries"
                // level="Advanced"
              />

              <SkillCard
                name="State Management"
                description="Knowledgeable in state management techniques, with practical experience in implementing efficient patterns"
                technology="Bloc pattern, Efficiency, State management (Flutter)"
                // level="Intermediate"
              />

              <SkillCard
                name="Asynchronous Programming"
                description="Experienced in implementing asynchronous programming concepts to enhance application performance"
                technology="Futures, Streams, State management"
                // level="Advanced"
              />

              <SkillCard
                name="API Integration"
                description="Skilled in integrating various libraries and APIs to enhance functionality and user experience"
                technology="Third-party libraries, Google Maps, Firebase"
                // level="Advanced"
              />

              <SkillCard
                name="Backend Development"
                description="Proficient in developing robust backend services, focusing on creating efficient RESTful APIs"
                technology="FastAPI, RESTful APIs, Application integration"
                // level="Advanced"
              />

              <SkillCard
                name="Cloud Deployment"
                description="Experienced in deploying applications on cloud platforms, ensuring CI/CD integration and scalability"
                technology="AWS Amplify, CI/CD, Scalable hosting"
                // level="Advanced"
              />

              <SkillCard
                name="App Publishing"
                description="Competent in navigating the publishing processes for mobile applications, ensuring compliance with guidelines"
                technology="Google Play Store, Apple App Store"
                // level="Intermediate"
              />

              <SkillCard
                name="Agile Methodologies"
                description="Familiar with Agile methodologies and tools, facilitating efficient project management"
                technology="Trello, GitHub"
                // level="Intermediate"
              />

              <SkillCard
                name="Programming Languages"
                description="Proficient in multiple programming languages with solid development practices"
                technology="Dart, Python, HTML, CSS, JavaScript"
                // level="Advanced"
              />

              <SkillCard
                name="Databases"
                description="Skilled in using various database technologies for effective data storage and retrieval"
                technology="Firebase, Firestore, MongoDB, PostgreSQL"
                // level="Intermediate"
              />

              <SkillCard
                name="Collaboration Tools"
                description="Utilizes a range of tools to enhance team collaboration and maintain effective communication throughout projects"
                technology="GitHub, Trello, Discord"
                // level="Intermediate"
              />

              <SkillCard
                name="IDEs"
                description="Proficient in using integrated development environments to streamline coding workflows and enhance productivity"
                technology="Android Studio, VSCode, trae, notepad++"
                // level="Advanced"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}


// Project Card Component
function ProjectCard({
  title,
  description,
  website,
  app,
}: {
  title: string
  description: string
  website?: string
  app?: string
}) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
      <h5 className="font-bold text-slate-800 dark:text-white mb-3">{title}</h5>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-3">
        {website && (
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <span>🌐 Website</span>
            <ExternalLink size={12} />
          </Link>
        )}
        {app && (
          <Link
            href={app}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
          >
            <span>📱 App</span>
            <ExternalLink size={12} />
          </Link>
        )}
      </div>
    </div>
  )
}

// Skill Card Component
function SkillCard({
  name,
  description,
  technology,
  level,
}: {
  name: string
  description: string
  technology: string
  level?: string
}) {
  return (
    <div className="bg-slate-50 dark:bg-slate-700/50 rounded-lg p-5 border border-slate-200 dark:border-slate-700">
      <div className="flex justify-between items-start mb-2">
        <h5 className="font-bold text-slate-800 dark:text-white">{name}</h5>
        <span
          className={`
          px-3 py-1 rounded-full text-xs font-medium
          ${
            level === "Advanced"
              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
              : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
          }
        `}
        >
          {level}
        </span>
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">{description}</p>
      <div className="text-xs text-slate-500 dark:text-slate-400">
        <span className="font-medium">Technologies:</span> {technology}
      </div>
    </div>
  )
}

// Responsibility Item Component
function ResponsibilityItem({
  text,
  icon = "CheckCircle",
}: {
  text: string
  icon?: string
}) {
  const IconComponent = getIconByName(icon)

  return (
    <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-50/50 dark:bg-slate-700/30 border border-slate-200/50 dark:border-slate-700/50">
      <div className="text-primary shrink-0 mt-0.5">
        <IconComponent size={18} />
      </div>
      <p className="text-slate-700 dark:text-slate-300 text-sm">{text}</p>
    </div>
  )
}

// Helper function to get icon by name
function getIconByName(name: string) {
  const icons: Record<string, any> = {
    CheckCircle: (props: any) => <CheckCircle {...props} />,
    Users: (props: any) => <Users {...props} />,
    Code: (props: any) => <Code {...props} />,
    MessageSquare: (props: any) => <MessageSquare {...props} />,
    Clock: (props: any) => <Clock {...props} />,
    Layers: (props: any) => <Layers {...props} />,
    UserPlus: (props: any) => <UserPlus {...props} />,
    GitBranch: (props: any) => <GitBranch {...props} />,
    Bug: (props: any) => <Bug {...props} />,
    GitPullRequest: (props: any) => <GitPullRequest {...props} />,
    Server: (props: any) => <Server {...props} />,
    Users2: (props: any) => <Users2 {...props} />,
    FileText: (props: any) => <FileText {...props} />,
    Rocket: (props: any) => <Rocket {...props} />,
    Database: (props: any) => <Database {...props} />,
    Globe: (props: any) => <Globe {...props} />,
    Upload: (props: any) => <Upload {...props} />,
  }

  return icons[name] || icons.CheckCircle
}

