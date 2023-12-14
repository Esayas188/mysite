// server.js
require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

// ...
const app = express();
const PORT = process.env.PORT || 3001;
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bodyParser.json());

app.post('/sendemail', async (req, res) => {
    const { email, subject, message } = await req.body;
    console.log("this is resived DataTransfer",email,subject,message);
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
    console.log(email, subject, message);
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info);
        res.json({ success: true });
      } catch (error) {
        console.error('Error sending email:', error);
        res.json({ error });

      }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
