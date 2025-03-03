import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl font-bold mb-12 dark:text-white">ABOUT ME</h1>
        
        <div className="space-y-12">
          <section className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Technical Skills</h3>
                <ul className="space-y-2 dark:text-zinc-400">
                  <li><strong>UI Design:</strong> Figma, Flutter widgets, Responsive design</li>
                  <li><strong>State Management:</strong> Bloc pattern, Flutter</li>
                  <li><strong>Programming:</strong> Dart, Python, HTML, CSS, JavaScript</li>
                  <li><strong>Backend:</strong> FastAPI, RESTful APIs</li>
                  <li><strong>Cloud:</strong> AWS Amplify, CI/CD</li>
                  <li><strong>Database:</strong> Firebase, Firestore, MongoDB</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 dark:text-white">Professional Skills</h3>
                <ul className="space-y-2 dark:text-zinc-400">
                  <li><strong>Project Management:</strong> Agile, Trello</li>
                  <li><strong>App Publishing:</strong> Google Play Store, Apple App Store</li>
                  <li><strong>Development:</strong> Android Studio, VSCode</li>
                  <li><strong>Platforms:</strong> Windows, Linux, MacOS</li>
                  <li><strong>Languages:</strong> English (Advanced), Hindi (Advanced), Urdu (Advanced)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">Education</h2>
            <ul className="space-y-4 dark:text-zinc-400">
              <li>
                <h3 className="font-semibold">Bachelor of Science (Computer Science)</h3>
                <p>University of Delhi - Currently Pursuing</p>
              </li>
              <li>
                <h3 className="font-semibold">Senior Secondary School Certificate (12th Grade)</h3>
                <p>Central Board of Secondary Education</p>
              </li>
              <li>
                <h3 className="font-semibold">Secondary School Certificate (10th Grade)</h3>
                <p>Central Board of Secondary Education</p>
              </li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold dark:text-white">Work Experience</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Project Manager - Pyramid Developers</h3>
                <p className="text-zinc-600 dark:text-zinc-400">June 2023 - Present</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold dark:text-white">Responsibilities:</h4>
                    <ul className="list-disc pl-5 mt-2 dark:text-zinc-400">
                      <li>Supervised development teams across various projects</li>
                      <li>Led frontend and backend integration efforts</li>
                      <li>Collaborated closely with clients</li>
                      <li>Provided technical troubleshooting and solutions</li>
                      <li>Ensured adherence to timelines and project delivery milestones</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold dark:text-white">Software Developer - Pyramid Developers</h3>
                <p className="text-zinc-600 dark:text-zinc-400">August 2022 - June 2023</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold dark:text-white">Responsibilities:</h4>
                    <ul className="list-disc pl-5 mt-2 dark:text-zinc-400">
                      <li>Developed key features using Flutter and Firebase</li>
                      <li>Integrated third-party APIs</li>
                      <li>Worked with AWS Lambda and Firebase Cloud Functions</li>
                      <li>Collaborated on frontend and backend development</li>
                      <li>Provided deployment support</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold dark:text-white">Freelance Application Developer - VocalCode</h3>
                <p className="text-zinc-600 dark:text-zinc-400">February 2021 - July 2022</p>
                <div className="mt-4 space-y-4">
                  <div>
                    <h4 className="font-semibold dark:text-white">Responsibilities:</h4>
                    <ul className="list-disc pl-5 mt-2 dark:text-zinc-400">
                      <li>Developed Flutter applications with Firebase backend</li>
                      <li>Integrated Jitsi Meet Video Calling API</li>
                      <li>Managed app publishing on Google Play Store</li>
                      <li>Provided ongoing support and maintenance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-12">
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

