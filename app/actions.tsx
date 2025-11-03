"use server"

import nodemailer from "nodemailer"

export async function sendEmail(formData: { name: string; email: string; message: string }) {
  try {
    // Create transporter - using Gmail with app password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    })

    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "Derejemelat28@gmail.com",
      subject: `New message from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong></p>
        <p>${formData.message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: formData.email,
    })

    return { success: true, message: "Email sent successfully!" }
  } catch (error) {
    console.error("Email error:", error)
    return { success: false, message: "Failed to send email. Please try again." }
  }
}
