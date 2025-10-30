// Import the nodemailer package to send emails
const nodemailer = require('nodemailer');

// Create a transporter object to connect to an email service
const transporter = nodemailer.createTransport({
  service: 'gmail', // Use Gmail service
  auth: {
    user: 'your_email@gmail.com',    // Replace with your Gmail address
    pass: 'your_app_password'        // Use an App Password (generated from your Google Account)
  }
});

// Define the email details
const mailOptions = {
  from: 'your_email@gmail.com',      // Sender address
  to: 'your_email@gmail.com',        // Receiver address (you can use your own)
  subject: 'Test Email from Node.js',// Email subject
  text: 'Hello from Node.js!'        // Plain text body of the email
};

// Send the email using the transporter
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    // Log an error message if sending fails
    console.error('Error:', error);
  } else {
    // Log a success message if the email is sent
    console.log('Email sent:', info.response);
  }
});
