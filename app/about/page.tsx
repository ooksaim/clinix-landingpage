import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Target, Eye, Users, Heart, Clock, FileText, TrendingUp, Zap } from "lucide-react"

export default function AboutPage() {
  const founders = [
    {
      name: "Saim Hassan",
      role: "Founder & Lead Developer",
      bio: "MBBS 3rd-year, Nishtar Medical University. Built the ClinixAI model by combining medical knowledge with strong prior tech skills. Core product architect and developer. Acts as the bridge between medicine and technology.",
      linkedin: "https://www.linkedin.com/in/muhammadsaimhassan",
    },
    {
      name: "Anisha Manzoor",
      role: "Co-Founder, Product & Research",
      bio: "3rd-year MBBS student, Nishtar Medical University. Extensive experience in research and market analysis, leading multiple academic and healthcare-related research initiatives. At ClinixAI, she focuses on product research, user validation, and market fit. Acts as the product manager.",
      linkedin: "https://www.linkedin.com/in/anisha-manzoor-1a279234a",
    },
    {
      name: "Abdullah Zahid",
      role: "Co-Founder, Business & Growth",
      bio: "CS student, Air University. Worked with Saim on several tech projects prior to ClinixAI. Handles social media, marketing strategy, and sales. Supports technical development while leading growth operations.",
      linkedin: "https://www.linkedin.com/in/muhammad-abdullah-zahid-95543a37a",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img src="/images/healthcare-icon.png" alt="Clinix AI Logo" className="w-10 h-10" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Clinix AI
                </h1>
                <p className="text-sm text-slate-600">Hospital Management</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </a>
              <a href="/product" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Product
              </a>
              <a href="/about" className="text-blue-600 font-medium">
                About Us
              </a>
              <a href="/contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Mission
            </div>
            <h1 className="text-6xl font-bold text-slate-900 mb-8 leading-tight">
              Why We{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Exist</span>
            </h1>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-2xl text-slate-700 leading-relaxed font-light">
                At ClinixAI, we envision a healthcare ecosystem where technology serves humanity, not the other way
                around. We believe hospitals deserve more than just digital record-keeping systems — they deserve
                intelligent, adaptive platforms that actively reduce operational delays, eliminate administrative
                burden, and restore the sacred doctor-patient relationship.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our mission transcends traditional healthcare software. We're building the neural network of modern
                hospitals — an AI-powered infrastructure that thinks, learns, and evolves with every patient
                interaction, ensuring that medical professionals can focus on what they do best: healing people.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-green-600">75%</CardTitle>
                <CardDescription className="text-slate-600 font-medium">Reduction in Wait Times</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  AI-powered triage and workflow optimization dramatically reduces patient waiting periods
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-blue-600">60%</CardTitle>
                <CardDescription className="text-slate-600 font-medium">Less Paperwork</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Automated documentation and intelligent forms eliminate redundant administrative tasks
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-purple-600">40%</CardTitle>
                <CardDescription className="text-slate-600 font-medium">Improved Efficiency</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center">
                  Real-time analytics and predictive insights optimize hospital operations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-slate-900 mb-8">The Healthcare Crisis We're Solving</h2>
              <p className="text-xl text-slate-700 leading-relaxed">
                Born from witnessing the systemic inefficiencies plaguing healthcare institutions worldwide — from
                overcrowded emergency rooms in Karachi to understaffed hospitals in rural Pakistan — ClinixAI emerged as
                a response to the urgent need for intelligent healthcare infrastructure.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-0 shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-slate-800 mb-4">The Global Healthcare Challenge</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    Healthcare systems worldwide face unprecedented challenges: overcrowded emergency departments,
                    delayed diagnostic reporting, inconsistent documentation standards, and fragmented data silos that
                    prevent holistic patient care.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Traditional hospital management systems merely store information without providing actionable
                    insights. Medical professionals spend more time navigating complex software than caring for
                    patients, leading to burnout and compromised care quality.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="destructive" className="px-3 py-1">
                      Long Wait Times
                    </Badge>
                    <Badge variant="destructive" className="px-3 py-1">
                      Manual Processes
                    </Badge>
                    <Badge variant="destructive" className="px-3 py-1">
                      Data Silos
                    </Badge>
                    <Badge variant="destructive" className="px-3 py-1">
                      Staff Burnout
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-0 shadow-xl">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl text-slate-800 mb-4">Our Revolutionary Approach</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-700 leading-relaxed">
                    ClinixAI transforms hospitals into intelligent ecosystems through our lightweight, browser-based
                    platform that requires zero complex IT infrastructure. Our bilingual AI understands both medical
                    terminology and local languages, making it accessible to diverse healthcare teams.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    From AI-powered patient triage and instant voice-to-text documentation to real-time operational
                    dashboards and predictive analytics, we've created a comprehensive solution that makes hospitals
                    operate with unprecedented efficiency and transparency.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge className="px-3 py-1 bg-green-100 text-green-800">AI-Powered Triage</Badge>
                    <Badge className="px-3 py-1 bg-green-100 text-green-800">Voice Documentation</Badge>
                    <Badge className="px-3 py-1 bg-green-100 text-green-800">Real-time Analytics</Badge>
                    <Badge className="px-3 py-1 bg-green-100 text-green-800">Zero Setup</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Vision</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Building the future of healthcare infrastructure, one intelligent system at a time
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-slate-800 mb-2">Short-term Vision</CardTitle>
                <CardDescription className="text-lg text-slate-600">Next 12 Months</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Deploy ClinixAI across 3–5 pioneering hospitals in Pakistan, demonstrating measurable improvements in
                  operational efficiency, patient satisfaction, and clinical outcomes.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">Reduce average door-to-doctor time by 50%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">Accelerate radiology reporting by 75%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-slate-700">Achieve 95% user adoption rate</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-100 border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl text-slate-800 mb-2">Long-term Vision</CardTitle>
                <CardDescription className="text-lg text-slate-600">Next 3–5 Years</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-700 leading-relaxed text-lg">
                  Establish ClinixAI as the premier AI-powered healthcare infrastructure across South Asia and MENA
                  regions, seamlessly integrating with global health networks.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-700">Power 500+ hospitals across emerging markets</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-700">Process 10M+ patient interactions annually</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-slate-700">Become the global standard for AI healthcare</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet the Founders Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-slate-900 mb-6">Meet the Founders</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A diverse team of medical students and technologists united by a shared vision of transforming healthcare
              through AI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-6">
                  <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-slate-800 mb-2">{founder.name}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold text-lg">{founder.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-slate-600 leading-relaxed">{founder.bio}</p>
                  <div className="pt-4">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center space-x-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Connect on LinkedIn</span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center space-x-3">
              <img src="/images/healthcare-icon.png" alt="Clinix AI Logo" className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold">Clinix AI</h3>
                <p className="text-slate-400">AI-powered healthcare management</p>
              </div>
            </div>

            <div className="flex justify-center space-x-8">
              <a href="/" className="text-slate-300 hover:text-white transition-colors font-medium">
                Home
              </a>
              <a href="/product" className="text-slate-300 hover:text-white transition-colors font-medium">
                Product
              </a>
              <a href="/about" className="text-white font-medium">
                About Us
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors font-medium">
                Contact
              </a>
            </div>

            <div className="flex justify-end space-x-4">
              <a
                href="https://www.linkedin.com/company/clinixai987/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/_clinixai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-slate-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">© 2025 Clinix AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
