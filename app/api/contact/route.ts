import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, hospital, designation, phone, message } = body

    // Log the form submission for debugging
    console.log("📧 New contact form submission:", {
      name,
      email,
      hospital,
      designation,
      phone,
      message: message.substring(0, 100) + "..."
    })

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY === 'your_resend_api_key_here') {
      console.error("❌ RESEND_API_KEY not configured properly")
      console.log("📧 Form data received but email not sent (no API key)")
      
      // For now, just log the details and return success
      console.log("📝 Contact Details:", {
        name, email, hospital, designation, phone, 
        message: message.substring(0, 200) + "..."
      })
      
      return NextResponse.json({ 
        message: "Demo request received! Since email is not configured yet, please contact us directly at saimhassan7a2@gmail.com",
        status: "received_but_email_not_sent"
      }, { status: 200 })
    }

    // Send email notification directly
    try {
      const emailResult = await resend.emails.send({
        from: 'ClinixAI Contact <contact@resend.dev>', // Using resend.dev default domain
        to: ['saimhassan7a2@gmail.com'],
        replyTo: email, // This allows you to reply directly to the person who submitted
        subject: `🏥 New ClinixAI Demo Request from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="margin: 0; font-size: 28px;">🏥 New Demo Request</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">ClinixAI Hospital Management System</p>
            </div>
            
            <!-- Contact Information -->
            <div style="background: #f8fafc; padding: 25px; margin: 0; border-left: 4px solid #2563eb;">
              <h2 style="margin-top: 0; color: #1e293b; font-size: 22px;">👤 Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td><td style="padding: 8px 0; color: #1f2937;">${name}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td><td style="padding: 8px 0; color: #1f2937;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td><td style="padding: 8px 0; color: #1f2937;"><a href="tel:${phone}" style="color: #2563eb; text-decoration: none;">${phone}</a></td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Hospital:</td><td style="padding: 8px 0; color: #1f2937;">${hospital}</td></tr>
                <tr><td style="padding: 8px 0; font-weight: bold; color: #374151;">Role:</td><td style="padding: 8px 0; color: #1f2937;">${designation}</td></tr>
              </table>
            </div>
            
            <!-- Message -->
            <div style="background: #fef7f0; padding: 25px; margin: 0; border-left: 4px solid #f59e0b;">
              <h2 style="margin-top: 0; color: #92400e; font-size: 22px;">💬 Their Message</h2>
              <div style="background: white; padding: 20px; border-radius: 8px; line-height: 1.6; color: #374151; border: 1px solid #fed7aa;">
                ${message.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <!-- Action Required -->
            <div style="background: #ecfdf5; padding: 25px; margin: 0; border-left: 4px solid #10b981;">
              <h2 style="margin-top: 0; color: #065f46; font-size: 22px;">⚡ Action Required</h2>
              <p style="margin: 0; color: #047857; font-size: 16px;">
                <strong>24-Hour Response Guarantee:</strong> Please respond within 24 hours as promised on the ClinixAI website.
              </p>
              <div style="margin-top: 15px;">
                <a href="mailto:${email}?subject=Re: ClinixAI Demo Request" 
                   style="background: #10b981; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; display: inline-block; font-weight: bold;">
                  📧 Reply to ${name}
                </a>
              </div>
            </div>
            
            <!-- Footer -->
            <div style="background: #f9fafb; padding: 20px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="margin: 0; color: #6b7280; font-size: 14px;">
                Sent from <strong>ClinixAI Contact Form</strong> • ${new Date().toLocaleString()}
              </p>
            </div>
          </div>
        `,
      })

      console.log("✅ Email sent successfully:", emailResult.data?.id)
      
      return NextResponse.json({ 
        message: "Demo request sent successfully! We'll contact you within 24 hours.",
        emailId: emailResult.data?.id
      }, { status: 200 })

    } catch (emailError) {
      console.error("❌ Failed to send email:", emailError)
      return NextResponse.json({ 
        error: "Failed to send email. Please contact us directly at saimhassan7a2@gmail.com" 
      }, { status: 500 })
    }

  } catch (error) {
    console.error("❌ API route error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
