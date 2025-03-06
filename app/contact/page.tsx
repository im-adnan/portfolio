import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 dark:text-white">CONTACT</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <Card className="p-8 space-y-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold dark:text-white">Get in Touch</h2>
              <div className="space-y-4">
                <a 
                  href="mailto:sayedmuhammadadnan@outlook.com" 
                  className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  <Mail className="w-5 h-5" />
                  sayedmuhammadadnan@gmail.com
                </a>
                <a 
                  href="tel:+919548277449" 
                  className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  <Phone className="w-5 h-5" />
                  +91 9548277449
                </a>
                <div className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400">
                  <MapPin className="w-5 h-5" />
                  <address className="not-italic">
                    12/204, Bazaria, Jal Kal Sansthan,<br />
                    Sahaswan, Uttar Pradesh,<br />
                    India - 243638
                  </address>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold dark:text-white">Social Links</h2>
              <div className="space-y-4">
                <a 
                  href="https://www.linkedin.com/in/im-adnan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/im-adnan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  <Github className="w-5 h-5" />
                  GitHub Profile
                </a>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">Project Inquiries</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              I'm always interested in hearing about new projects and opportunities. 
              Feel free to reach out if you'd like to discuss a potential collaboration.
            </p>
            <Button asChild className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <a href="mailto:sayedmuhammadadnan@gmail.com">Send Email</a>
            </Button>
          </div>
        </div>


      </div>
    </div>
  )
}

