const sendMail = require("../utils/mailer");

const sendMailHandler = async (req, res) => {
  const { from, subject, to, text } = req.body;
  console.log(`${from}\n${subject}\n${to}\n${text}`);
  if (!to || !text) return res.status(400).json({ message: "Invalid data" });

  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text,
  };

  try {
    // Send mail using the imported sendMail function
    const success = await sendMail(mailOptions);

    if (success) {
      console.log("Email sent successfully");
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } else {
      console.error("Failed to send email");
      res.status(500).json({ success: false, message: "Failed to send email" });
    }
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
};

module.exports = sendMailHandler;
