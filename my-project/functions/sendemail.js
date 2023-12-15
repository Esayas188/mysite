// functions/send-email.js

const nodemailer = require('nodemailer');
require('dotenv').config();

exports.handler = async (event, context) => {
  try {
    const { email, subject, message } = JSON.parse(event.body);
    console.log("Received Data:", email, subject, message);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.FROM_EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: [process.env.FROM_EMAIL, email],
      subject: subject,
      html: `<h1>${subject}</h1><p>Thank you for contacting us!</p><p>New message submitted:</p><p>${message}</p>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error('Error sending email:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
