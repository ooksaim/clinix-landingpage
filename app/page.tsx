"use client"

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-100 to-blue-50 rounded-full border border-blue-200">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
                  <span className="text-xs sm:text-sm font-semibold text-blue-700">Next-Generation Healthcare AI</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 bg-clip-text text-transparent">
                    Clinix AI
                  </span>
                  <br />
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-700">Hospital Management</span>
                </h1>

                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-600 px-4">
                    Advanced AI-powered healthcare management system
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-500 leading-relaxed max-w-3xl mx-auto px-4">
                    Revolutionizing healthcare operations with intelligent automation, WHO-compliant protocols, and
                    seamless workflow integration for medical professionals worldwide.
                  </p>
                </div>

                <div className="flex justify-center pt-2 sm:pt-4">
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-2xl lg:max-w-4xl mx-auto px-4">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  return (
                    <div key={index} className="text-center group">
                      <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-sm border border-blue-100 group-hover:shadow-md transition-all duration-300">
                        <div className="flex justify-center mb-1 sm:mb-2">
                          <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-md sm:rounded-lg flex items-center justify-center">
                            <IconComponent className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                          </div>
                        </div>
                        <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                          {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-slate-600 font-medium">{stat.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex justify-center mt-8 sm:mt-12 lg:mt-16 px-4">
              <div className="relative w-full max-w-4xl">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl sm:rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-blue-50 to-white p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-100">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                    <div className="col-span-2 sm:col-span-3 text-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                        <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-slate-800">AI-Powered Healthcare</h3>
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
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm border border-blue-100 mx-auto mb-2">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 font-medium">{item.label}</p>
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
      <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 px-4">Role-Specific Modules</h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto px-4">
              Clinix AI adapts to every role in the hospital, empowering staff with AI-driven workflows.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {modules.map((module, index) => {
              const IconComponent = module.icon
              return (
                <Card
                  key={index}
                  className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className={`h-1.5 sm:h-2 bg-gradient-to-r ${module.gradient}`}></div>
                  <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${module.gradient} rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                      >
                        <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <CardTitle className="text-slate-800 text-base sm:text-lg leading-tight">{module.title}</CardTitle>
                        <CardDescription className="text-slate-600 font-medium text-sm sm:text-base">{module.subtitle}</CardDescription>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{module.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6 pt-0">
                    <div className="space-y-2 sm:space-y-3">
                      <h4 className="font-semibold text-slate-700 text-xs sm:text-sm uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {module.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2 sm:space-x-3 text-xs sm:text-sm text-slate-600">
                            <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r ${module.gradient} rounded-full mt-1.5 sm:mt-2 flex-shrink-0`}></div>
                            <span className="leading-relaxed">{feature}</span>
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
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 px-4">See Clinix AI in Action</h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 px-4">
              Get a sneak peek of our intuitive interface designed for healthcare professionals.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full px-4">
              <div className="absolute inset-0 bg-white/10 rounded-xl sm:rounded-2xl blur-2xl sm:blur-3xl"></div>
              <Card className="relative border-0 shadow-2xl overflow-hidden bg-white/95 backdrop-blur-sm">
                <CardContent className="p-3 sm:p-4">
                  <img
                    src="/images/app-screenshot.png"
                    alt="ClinixAI Hospital Operations Dashboard - Real-time patient monitoring and management interface"
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </CardContent>
              </Card>
              <p className="text-center text-blue-100 mt-4 sm:mt-6 font-medium text-sm sm:text-base">Hospital Operations Dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="bg-blue-50 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-3 sm:mb-4 px-4">WHO Standard Compliant</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto mb-6 sm:mb-8 px-4 leading-relaxed">
            Clinix AI follows WHO triage and protocol guidance and is built with privacy, safety, and reliability at its
            core.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium border-blue-200 text-blue-700 bg-white shadow-sm w-full sm:w-auto flex items-center justify-center"
            >
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
              WHO Compliant
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium border-blue-200 text-blue-700 bg-white shadow-sm w-full sm:w-auto flex items-center justify-center"
            >
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
              HIPAA Ready
            </Badge>
            <Badge
              variant="outline"
              className="px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium border-blue-200 text-blue-700 bg-white shadow-sm w-full sm:w-auto flex items-center justify-center"
            >
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
              Encrypted
            </Badge>
          </div>
        </div>
      </section>
    </div>
  )
}
