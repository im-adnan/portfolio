"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Send, ArrowRight } from "lucide-react"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Get the actual form element
    const form = e.currentTarget as HTMLFormElement

    // Create FormData from the form
    const formData = new FormData(form)

    setFormStatus("submitting")

    try {
      // Submit the form to the original action URL
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setFormStatus("success")
        form.reset()

        // Reset status after 3 seconds
        setTimeout(() => setFormStatus("idle"), 3000)
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      setFormStatus("idle")
    }
  }

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-2 pb-20 sm:pb-28">
        <div className="space-y-2 mb-4">
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              Let's Connect
            </h1>
          </div>
        </div>

        <Card className="border-none shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-700 dark:to-purple-800 p-8 md:p-10 text-white">
                <h2 className="text-2xl font-bold mb-4">Project Inquiries</h2>
                <p className="text-blue-50 dark:text-blue-100 leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
                  like to discuss a potential collaboration.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-medium">Quick Response</h3>
                      <p className="text-sm text-blue-100 dark:text-blue-200">I'll get back to you within 48 hours</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Secure Communication</h3>
                      <p className="text-sm text-blue-100 dark:text-blue-200">Your information is always protected</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 8v4l3 3"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Flexible Scheduling</h3>
                      <p className="text-sm text-blue-100 dark:text-blue-200">
                        Available for meetings at your convenience
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">Connect with me on LinkedIn</h3>
                      <a href="https://www.linkedin.com/in/im-adnan/" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-100 dark:text-blue-200 hover:underline">https://www.linkedin.com/in/im-adnan</a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium">My GitHub</h3>
                      <a href="https://github.com/im-adnan" target="_blank" rel="noopener noreferrer" className="text-sm text-blue-100 dark:text-blue-200 hover:underline">https://github.com/im-adnan</a>
                    </div>
                  </div>
                  
                </div>
              </div>

              <div className="p-8 md:p-10">
                <form
                  action="https://formsubmit.co/sayedmuhammadadnan@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Your Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        className="h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus-visible:ring-blue-500 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Your Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus-visible:ring-blue-500 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="_subject"
                      placeholder="Project Inquiry"
                      className="h-12 rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus-visible:ring-blue-500 placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      Your Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      className="min-h-[150px] rounded-lg border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus-visible:ring-blue-500 resize-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
                      required
                    />
                  </div>

                  <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={formStatus !== "idle"}
                      className="w-full h-12 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
                    >
                      {formStatus === "idle" && (
                        <>
                          Send Message
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      )}
                      {formStatus === "submitting" && "Sending..."}
                      {formStatus === "success" && "Message Sent!"}
                    </Button>

                    {formStatus === "success" && (
                      <p className="mt-4 text-green-600 dark:text-green-400 text-sm text-center">
                        Your message has been sent successfully. I'll get back to you soon!
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919548277449"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-50"
        aria-label="Connect on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.89 5.84L2.2 22l4.28-1.69c1.53.94 3.33 1.49 5.25 1.49 5.52 0 10-4.48 10-10S17.52 2 12 2zm.89 14.24l-.06.06c-.88.88-1.92 1.49-3.07 1.77-1.14.28-2.31.19-3.39-.26l-.4-.18-2.63 1.04.97-2.72-.2-.43c-.51-1.07-.64-2.25-.39-3.4.25-1.14.83-2.19 1.67-3.04l.06-.06c2.17-2.17 5.7-2.17 7.87 0 2.17 2.18 2.17 5.71 0 7.88z"
          />
        </svg>
      </a>
    </>
  )
}

