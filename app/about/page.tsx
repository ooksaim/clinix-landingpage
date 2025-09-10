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
    </div>
  )
}
