import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 mt-24 border-t border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-start text-center md:text-left">
          <div className="space-y-4 dark:text-zinc-400 px-4">
            <h3 className="text-sm font-bold">Contact</h3>
            <p className="text-sm">
              <a
                href="mailto:sayedmuhammadadnan@outlook.com"
                className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <Mail className="w-5 h-5" />
                sayedmuhammadadnan@gmail.com
              </a>
            </p>
            <p className="text-sm">
              <a
                href="tel:+919548277449"
                className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <Phone className="w-5 h-5" />
                +91 9548277449
              </a>
            </p>
          </div>
          <div className="space-y-4 dark:text-zinc-400 px-4">
            <h3 className="text-sm font-bold">Social</h3>
            <p className="text-sm">
              <a
                href="https://www.linkedin.com/in/im-adnan/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn Profile
              </a>
            </p>
            <p className="text-sm">
              <a
                href="https://github.com/im-adnan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
              >
                <Github className="w-5 h-5" />
                GitHub Profile
              </a>
            </p>
          </div>
          <div className="space-y-4 dark:text-zinc-400 px-4">
            <h3 className="text-sm font-bold">Location</h3>
            <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
              <MapPin className="w-5 h-5" />
              <address className="not-italic">
                12/204, Bazaria, Jal Kal Sansthan,<br />
                Sahaswan, Uttar Pradesh,<br />
                India - 243638
              </address>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

