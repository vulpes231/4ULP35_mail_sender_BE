const nodemailer = require("nodemailer");
require("dotenv").config();

// Create a transporter using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // e.g., 'gmail', 'hotmail', etc.
  port: 587,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Listen for 'error' events on the transporter
transporter.on("error", (error) => {
  console.error("Error occurred while sending email:", error);
});

// Function to send an email
async function sendMail(mailOptions) {
  try {
    // Send mail with the specified options
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

module.exports = sendMail;
