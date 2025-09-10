import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Check,
  Stethoscope,
  Brain,
  Shield,
  Clock,
  Users,
  Activity,
  Heart,
  AlertTriangle,
  Settings,
  BarChart3,
  Zap,
  Scan,
} from "lucide-react"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Doctor & Physician Module Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content in White Card */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 space-y-8">
                <div>
                  <Badge className="bg-blue-100 text-blue-700 border-blue-200 mb-4">
                    <Stethoscope className="w-4 h-4 mr-2" />
                    Doctor & Physician Module
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
                    Advanced Clinical Care &<span className="text-blue-600"> AI-Powered Diagnosis</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Revolutionize patient care with intelligent diagnostic tools, comprehensive patient management, and
                    seamless clinical workflow integration designed specifically for medical professionals.
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-blue-600 flex items-center">
                    <Brain className="w-6 h-6 mr-3" />
                    Core Capabilities
                  </h3>

                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">AI-Powered Diagnostic Assessment</h4>
                        <p className="text-gray-600">
                          Advanced machine learning algorithms analyze patient symptoms and medical history to provide
                          preliminary diagnostic suggestions with confidence scores.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Comprehensive Patient Records</h4>
                        <p className="text-gray-600">
                          Complete patient management system with medical history tracking, treatment plans, and secure
                          data storage compliant with healthcare regulations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Voice-to-Text Documentation</h4>
                        <p className="text-gray-600">
                          Streamline documentation with advanced voice recognition technology, allowing doctors to
                          dictate patient notes and symptoms efficiently.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Clinical Decision Support</h4>
                        <p className="text-gray-600">
                          Evidence-based recommendations, drug interaction alerts, and treatment guidelines to support
                          informed clinical decisions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Lab Results Integration</h4>
                        <p className="text-gray-600">
                          Seamless integration with laboratory systems for automatic result imports and AI-assisted
                          interpretation of diagnostic tests.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Specifications */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-blue-600 flex items-center">
                    <Shield className="w-6 h-6 mr-3" />
                    Technical Excellence
                  </h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <Card className="bg-blue-50 border-blue-100">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-8 h-8 text-blue-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Real-time Processing</h4>
                            <p className="text-sm text-gray-600">Instant AI analysis and recommendations</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-green-50 border-green-100">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Users className="w-8 h-8 text-green-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">Multi-user Support</h4>
                            <p className="text-sm text-gray-600">Collaborative care team access</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-purple-50 border-purple-100">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Shield className="w-8 h-8 text-purple-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">HIPAA Compliant</h4>
                            <p className="text-sm text-gray-600">Enterprise-grade security</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-orange-50 border-orange-100">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <Activity className="w-8 h-8 text-orange-600" />
                          <div>
                            <h4 className="font-semibold text-gray-900">99.9% Uptime</h4>
                            <p className="text-sm text-gray-600">Reliable 24/7 availability</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <a href="/contact">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                      Request Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Screenshots in Horizontal Layout */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">System Interface</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Doctor Dashboard Screenshot */}
                  <Card className="bg-blue-900 border-blue-800 overflow-hidden shadow-lg">
                    <CardContent className="p-4">
                      <Image
                        src="/images/doctor-dashboard.png"
                        alt="Doctor Dashboard - Patient Management Interface"
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="pt-4">
                        <h4 className="font-semibold text-white mb-2">Doctor Dashboard</h4>
                        <p className="text-sm text-blue-200">Comprehensive patient management and search interface</p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* AI Diagnosis Screenshot */}
                  <Card className="bg-blue-900 border-blue-800 overflow-hidden shadow-lg">
                    <CardContent className="p-4">
                      <Image
                        src="/images/doctor-diagnosis.png"
                        alt="AI Diagnostic Assessment Interface"
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="pt-4">
                        <h4 className="font-semibold text-white mb-2">AI Diagnostic Assessment</h4>
                        <p className="text-sm text-blue-200">
                          Advanced symptom analysis with voice recording and lab integration
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Diagnosis Modal Screenshot */}
                  <Card className="bg-blue-900 border-blue-800 overflow-hidden shadow-lg">
                    <CardContent className="p-4">
                      <Image
                        src="/images/diagnosis-modal.png"
                        alt="Diagnosis Confirmation Modal"
                        width={300}
                        height={150}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="pt-4">
                        <h4 className="font-semibold text-white mb-2">Professional Review</h4>
                        <p className="text-sm text-blue-200">
                          Doctor confirmation and professional assessment integration
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nurse & TAI-H Specialist Module Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content in White Card */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 space-y-8">
                <div>
                  <Badge className="bg-green-100 text-green-700 border-green-200 mb-4">
                    <Heart className="w-4 h-4 mr-2" />
                    Nurse & TAI-H Specialist Module
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
                    Streamlined Nursing Workflows &<span className="text-green-600"> Triage AI-Assistance</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    Designed for nurses and TAI-H specialists, this module ensures accurate triage, patient safety, and
                    consistent care through AI-powered protocols.
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-green-600 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3" />
                    Core Features
                  </h3>

                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Record Patient Vitals and Nursing Observations</h4>
                        <p className="text-gray-600">
                          Comprehensive vital signs tracking and nursing assessment documentation with real-time data
                          validation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Follow AI-Assisted Triage Protocols Aligned with WHO Standards
                        </h4>
                        <p className="text-gray-600">
                          Standardized triage protocols powered by AI to ensure consistent patient assessment and
                          prioritization.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Automatically Prioritize Patients Based on Severity
                        </h4>
                        <p className="text-gray-600">
                          Intelligent patient prioritization system that automatically assigns urgency levels based on
                          clinical indicators.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Receive Alerts and Reminders for Critical Care Tasks
                        </h4>
                        <p className="text-gray-600">
                          Smart notification system for medication schedules, vital sign monitoring, and critical care
                          interventions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Reduce Human Error with AI-Supported Decision-Making
                        </h4>
                        <p className="text-gray-600">
                          Advanced AI algorithms provide decision support to minimize errors and improve patient safety
                          outcomes.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Collaborate Seamlessly with Doctors Through Synced Patient Records
                        </h4>
                        <p className="text-gray-600">
                          Real-time synchronization of patient data enabling seamless communication between nursing and
                          medical staff.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <a href="/contact">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                      Request Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Screenshot */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Triage Interface</h3>

                <Card className="bg-blue-900 border-blue-800 overflow-hidden shadow-lg">
                  <CardContent className="p-6">
                    <Image
                      src="/images/nurse-triage-dashboard.png"
                      alt="Nurse & TAI-H Specialist Dashboard - AI-Guided Triage Interface"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="pt-4">
                      <h4 className="font-semibold text-white mb-2">AI-Guided Triage Dashboard</h4>
                      <p className="text-sm text-blue-200">
                        WHO Emergency Triage Assessment with AI-powered patient prioritization and vital signs
                        monitoring
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Administrator Module Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content in White Card */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 space-y-8">
                <div>
                  <Badge className="bg-purple-100 text-purple-700 border-purple-200 mb-4">
                    <Settings className="w-4 h-4 mr-2" />
                    Hospital Administrator Module
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
                    Hospital Administrator –<span className="text-purple-600"> Operations & Management</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    This module is designed for hospital administrators to manage overall operations, optimize
                    resources, and ensure smooth functioning of the healthcare system. It centralizes key functions into
                    one streamlined dashboard for maximum efficiency.
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-purple-600 flex items-center">
                    <Activity className="w-6 h-6 mr-3" />
                    Key Features
                  </h3>

                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Hospital Operations Dashboard</h4>
                        <p className="text-gray-600">
                          View real-time updates of ongoing activities and hospital-wide performance.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Resource Allocation Optimizer</h4>
                        <p className="text-gray-600">
                          Track and allocate medical resources efficiently to reduce wastage and shortages.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Staff Management Tools</h4>
                        <p className="text-gray-600">
                          Monitor staff schedules, assignments, and workload to improve coordination.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">System Management</h4>
                        <p className="text-gray-600">
                          Oversee the entire hospital's digital operations and ensure seamless connectivity.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <a href="/contact">
                    <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">
                      Request Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Screenshot */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Administrative Interface</h3>

                <Card className="bg-blue-900 border-blue-800 overflow-hidden shadow-lg">
                  <CardContent className="p-6">
                    <Image
                      src="/images/admin-dashboard.png"
                      alt="Hospital Administrator Dashboard - Operations & Management Interface"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="pt-4">
                      <h4 className="font-semibold text-white mb-2">Operations Management Dashboard</h4>
                      <p className="text-sm text-blue-200">
                        Comprehensive hospital operations overview with real-time metrics, resource allocation, and
                        AI-powered quick actions
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Analyst Module Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content in White Card */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 space-y-8">
                <div>
                  <Badge className="bg-orange-100 text-orange-700 border-orange-200 mb-4">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Medical Analyst Module
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
                    Medical Analyst –<span className="text-orange-600"> Data Analysis & Research</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    This module provides advanced analytics and research capabilities for medical analysts and
                    researchers. It helps uncover trends, patterns, and insights from patient data to improve healthcare
                    outcomes and guide clinical decision-making.
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-orange-600 flex items-center">
                    <BarChart3 className="w-6 h-6 mr-3" />
                    Key Features
                  </h3>

                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Patient Demographics Analysis</h4>
                        <p className="text-gray-600">
                          Break down patient information by age, gender, region, and other demographic factors.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Diagnosis Pattern Recognition</h4>
                        <p className="text-gray-600">
                          Identify common patterns in symptoms and diagnoses across patients.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Medical Condition Trends</h4>
                        <p className="text-gray-600">
                          Track trends in diseases, treatments, and recovery rates over time.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Research Insights</h4>
                        <p className="text-gray-600">
                          Generate data-driven insights to support clinical studies and hospital strategy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <a href="/contact">
                    <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3">
                      Request Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Screenshot */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Analytics Interface</h3>

                <Card className="bg-blue-900 border-blue-800 overflow-hidden shadow-lg">
                  <CardContent className="p-6">
                    <Image
                      src="/images/research-dashboard.png"
                      alt="Medical Research Dashboard - Data Analysis & Research Interface"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="pt-4">
                      <h4 className="font-semibold text-white mb-2">Analytics Dashboard</h4>
                      <p className="text-sm text-blue-200">
                        Comprehensive medical research and analytics platform with clinical insights, patient
                        demographics, and AI-powered data analysis
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Coordinator Module Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content in White Card */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 space-y-8">
                <div>
                  <Badge className="bg-red-100 text-red-700 border-red-200 mb-4">
                    <Zap className="w-4 h-4 mr-2" />
                    Emergency Coordinator Module
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
                    Emergency Coordinator –<span className="text-red-600"> Critical Care Management</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    This module equips emergency coordinators with the tools to manage critical care situations
                    effectively. It ensures rapid response, seamless coordination, and continuous monitoring of
                    high-risk patients during emergencies.
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-red-600 flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-3" />
                    Key Features
                  </h3>

                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Emergency Response Protocols</h4>
                        <p className="text-gray-600">Standardized workflows for immediate critical care action.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Critical Patient Alerts</h4>
                        <p className="text-gray-600">Real-time alerts and notifications for urgent cases.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Staff Assignment System</h4>
                        <p className="text-gray-600">
                          Quickly assign available staff to critical patients or crisis situations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Crisis Management Tools</h4>
                        <p className="text-gray-600">Streamlined communication and coordination during emergencies.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <a href="/contact">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                      Request Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Screenshot */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Emergency Interface</h3>

                <Card className="bg-blue-900 border-blue-800 overflow-hidden shadow-lg">
                  <CardContent className="p-6">
                    <Image
                      src="/images/emergency-dashboard.png"
                      alt="Emergency Response Center - Critical Care Management Interface"
                      width={600}
                      height={400}
                      className="w-full h-auto rounded-lg"
                    />
                    <div className="pt-4">
                      <h4 className="font-semibold text-white mb-2">Emergency Management Dashboard</h4>
                      <p className="text-sm text-blue-200">
                        Comprehensive emergency response center with real-time status monitoring, dispatch protocols,
                        and critical patient management
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Radiologist Module Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Content in White Card */}
            <Card className="bg-white shadow-xl border-0">
              <CardContent className="p-8 space-y-8">
                <div>
                  <Badge className="bg-teal-100 text-teal-700 border-teal-200 mb-4">
                    <Scan className="w-4 h-4 mr-2" />
                    Radiologist Module
                  </Badge>
                  <h2 className="text-4xl font-bold mb-6 leading-tight text-gray-900">
                    Radiologist –<span className="text-teal-600"> Medical Imaging & Reports</span>
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    This module empowers radiologists with AI-driven tools to streamline imaging analysis and reporting.
                    It reduces manual effort, speeds up report generation, and ensures higher accuracy in diagnosis
                    through voice-enabled transcription and AI formatting.
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-teal-600 flex items-center">
                    <Scan className="w-6 h-6 mr-3" />
                    Key Features
                  </h3>

                  <div className="grid gap-4">
                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Rapid Report Generation</h4>
                        <p className="text-gray-600">Create detailed medical reports in seconds.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Voice-to-Text Transcription</h4>
                        <p className="text-gray-600">Convert dictated notes into structured reports instantly.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">AI Medical Report Formatting</h4>
                        <p className="text-gray-600">Automatically format and standardize reports for consistency.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Imaging Analysis Support</h4>
                        <p className="text-gray-600">
                          Assistance in interpreting scans and highlighting critical findings.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-6">
                  <a href="/contact">
                    <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3">
                      Request Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Right Column - Screenshots */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Radiology Interface</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Voice Interface Screenshot */}
                  <Card className="bg-blue-900 border-blue-800 overflow-hidden shadow-lg">
                    <CardContent className="p-4">
                      <Image
                        src="/images/radiology-voice-interface.png"
                        alt="Voice-to-Radiology Report System Interface"
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="pt-4">
                        <h4 className="font-semibold text-white mb-2">Voice Dictation Interface</h4>
                        <p className="text-sm text-blue-200">
                          AI-powered voice dictation system for rapid report generation with patient information
                          management
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* System Check Screenshot */}
                  <Card className="bg-blue-900 border-blue-800 overflow-hidden shadow-lg">
                    <CardContent className="p-4">
                      <Image
                        src="/images/radiology-system-check.png"
                        alt="Radiology System Diagnostics and Configuration"
                        width={300}
                        height={200}
                        className="w-full h-auto rounded-lg"
                      />
                      <div className="pt-4">
                        <h4 className="font-semibold text-white mb-2">System Diagnostics</h4>
                        <p className="text-sm text-blue-200">
                          Comprehensive system health monitoring with API connectivity and troubleshooting guidance
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
