import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  CheckCircle,
  Shield,
  Stethoscope,
  Activity,
  Settings,
  BarChart3,
  AlertTriangle,
  FileText,
  Sparkles,
  Users,
  Award,
  Clock,
} from "lucide-react"

export default function HomePage() {
  const stats = [
    { number: "27+", label: "AI Features", icon: Sparkles },
    { number: "6", label: "Specialized Roles", icon: Users },
    { number: "WHO", label: "Standard Compliant", icon: Award },
    { number: "24/7", label: "AI Availability", icon: Clock },
  ]

  const modules = [
    {
      title: "Doctor/Physician",
      subtitle: "Clinical Care & Diagnosis",
      description: "Access AI-powered diagnosis, patient management, and clinical decision support tools.",
      features: ["AI Medical Diagnosis", "Patient Records Management", "Medical History Tracking"],
      icon: Stethoscope,
      gradient: "from-blue-500 to-blue-600",
      bgGradient: "from-blue-50 to-blue-100",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
    {
      title: "Nurse/Triage Specialist",
      subtitle: "Patient Assessment & Triage",
      description: "WHO-standard triage system, emergency protocols, and patient monitoring tools.",
      features: ["AI Triage System (WHO 5-Class)", "Emergency Protocol Management", "Vital Signs Recording"],
      icon: Activity,
      gradient: "from-green-500 to-green-600",
      bgGradient: "from-green-50 to-green-100",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      title: "Hospital Administrator",
      subtitle: "Operations & Management",
      description: "Hospital operations dashboard, analytics, resource optimization, and system management.",
      features: ["Hospital Operations Dashboard", "Resource Allocation Optimizer", "Staff Management Tools"],
      icon: Settings,
      gradient: "from-purple-500 to-purple-600",
      bgGradient: "from-purple-50 to-purple-100",
      buttonColor: "bg-purple-500 hover:bg-purple-600",
    },
    {
      title: "Medical Analyst",
      subtitle: "Data Analysis & Research",
      description: "Advanced analytics, patient demographics, diagnosis patterns, and research insights.",
      features: ["Patient Demographics Analysis", "Diagnosis Pattern Recognition", "Medical Condition Trends"],
      icon: BarChart3,
      gradient: "from-orange-500 to-orange-600",
      bgGradient: "from-orange-50 to-orange-100",
      buttonColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      title: "Emergency Coordinator",
      subtitle: "Critical Care Management",
      description: "Emergency response coordination, critical patient monitoring, and crisis management.",
      features: ["Emergency Response Protocols", "Critical Patient Alerts", "Staff Assignment System"],
      icon: AlertTriangle,
      gradient: "from-red-500 to-red-600",
      bgGradient: "from-red-50 to-red-100",
      buttonColor: "bg-red-500 hover:bg-red-600",
    },
    {
      title: "Radiologist",
      subtitle: "Medical Imaging & Reports",
      description: "AI-powered voice-to-report generation, medical imaging analysis, and rapid radiology reporting.",
      features: ["Rapid Report Generation", "Voice-to-Text Transcription", "AI Medical Report Formatting"],
      icon: FileText,
      gradient: "from-teal-500 to-teal-600",
      bgGradient: "from-teal-50 to-teal-100",
      buttonColor: "bg-teal-500 hover:bg-teal-600",
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
              <Link href="/" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Home
              </Link>
              <Link href="/product" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Product
              </Link>
              <Link href="/about" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-slate-700 hover:text-blue-600 font-medium transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full border border-blue-200">
                  <Sparkles className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-semibold text-blue-700">Next-Generation Healthcare AI</span>
                </div>

                <h1 className="text-6xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent">
                    Clinix AI
                  </span>
                  <br />
                  <span className="text-4xl font-bold text-slate-700">Hospital Management</span>
                </h1>

                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-slate-600">
                    Advanced AI-powered healthcare management system
                  </h3>
                  <p className="text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto">
                    Revolutionizing healthcare operations with intelligent automation, WHO-compliant protocols, and
                    seamless workflow integration for medical professionals worldwide.
                  </p>
                </div>

                <div className="flex justify-center pt-4">
                  <Button
                    variant="outline"
                    className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3 text-lg font-semibold transition-all duration-300 bg-transparent"
                    asChild
                  >
                    <a
                      href="https://drive.google.com/drive/folders/1Vy-08SNctpU3ErTmgJSpA3dBh1chKjzQ?usp=drive_link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Watch Demo
                    </a>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center group">
                      <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100 group-hover:shadow-md transition-all duration-300">
                        <div className="flex justify-center mb-2">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-center mt-16">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-white p-12 rounded-3xl shadow-2xl border border-blue-100">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <Stethoscope className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-800">AI-Powered Healthcare</h3>
                    </div>

                    {[
                      { icon: Activity, label: "Real-time Monitoring" },
                      { icon: Shield, label: "WHO Compliant" },
                      { icon: BarChart3, label: "Advanced Analytics" },
                      { icon: Users, label: "Multi-Role Support" },
                      { icon: Clock, label: "24/7 Availability" },
                      { icon: CheckCircle, label: "Secure & Reliable" },
                    ].map((item, index) => {
                      const IconComponent = item.icon
                      return (
                        <div key={index} className="text-center">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-blue-100 mx-auto mb-2">
                            <IconComponent className="w-5 h-5 text-blue-600" />
                          </div>
                          <p className="text-xs text-slate-600 font-medium">{item.label}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Role-Specific Modules</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Clinix AI adapts to every role in the hospital, empowering staff with AI-driven workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module, index) => {
              const IconComponent = module.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-2 bg-gradient-to-r ${module.gradient}`}></div>
                  <CardHeader className="pb-4">
                    <div className="flex items-start space-x-4 mb-4">
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${module.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-slate-800 text-lg">{module.title}</CardTitle>
                        <CardDescription className="text-slate-600 font-medium">{module.subtitle}</CardDescription>
                      </div>
                    </div>
                    <p className="text-slate-600">{module.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-700 text-sm uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3 text-sm text-slate-600">
                            <div className={`w-2 h-2 bg-gradient-to-r ${module.gradient} rounded-full`}></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Product Screenshot Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">See Clinix AI in Action</h2>
            <p className="text-xl text-blue-100">
              Get a sneak peek of our intuitive interface designed for healthcare professionals.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-2xl">
              <div className="absolute inset-0 bg-white/10 rounded-2xl blur-3xl"></div>
              <Card className="relative border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
                <CardContent className="p-4">
                  <img
                    src="/images/app-screenshot.png"
                    alt="Hospital Operations Dashboard"
                    className="w-full h-auto rounded-lg object-cover"
                    style={{ maxHeight: "300px" }}
                  />
                </CardContent>
              </Card>
              <p className="text-center text-blue-100 mt-6 font-medium">Hospital Operations Dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">WHO Standard Compliant</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            Clinix AI follows WHO triage and protocol guidance and is built with privacy, safety, and reliability at its
            core.
          </p>

          <div className="flex justify-center items-center space-x-8">
            <Badge
              variant="outline"
              className="px-6 py-3 text-sm font-medium border-blue-200 text-blue-700 bg-white shadow-sm"
            >
              <Shield className="w-4 h-4 mr-2" />
              WHO Compliant
            </Badge>
            <Badge
              variant="outline"
              className="px-6 py-3 text-sm font-medium border-blue-200 text-blue-700 bg-white shadow-sm"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              HIPAA Ready
            </Badge>
            <Badge
              variant="outline"
              className="px-6 py-3 text-sm font-medium border-blue-200 text-blue-700 bg-white shadow-sm"
            >
              <Shield className="w-4 h-4 mr-2" />
              Encrypted
            </Badge>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center space-x-3">
              <img src="/images/healthcare-icon.png" alt="Clinix AI Logo" className="w-8 h-8" />
              <div>
                <h3 className="text-lg font-bold">Clinix AI</h3>
                <p className="text-sm text-slate-400">AI-powered healthcare management</p>
              </div>
            </div>

            <div className="flex justify-center space-x-6">
              <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/product" className="text-slate-300 hover:text-white transition-colors">
                Product
              </Link>
              <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>

            <div className="flex justify-end space-x-4">
              <a
                href="https://www.linkedin.com/company/clinixai987/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/_clinixai"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.644.069-4.849.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400">© 2025 Clinix AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
