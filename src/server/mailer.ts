import nodemailer from 'nodemailer';

// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jonas.legrande@gmail.com', // Your email address
    pass: 'Ravenklauw1', // Your email password (consider using environment variables instead)
  },
});

// Function to send email
export const sendEmail = async (to: string, subject: string, text: string) => {
  const info = await transporter.sendMail({
    from: 'jonas.legrande@gmail.com',
    to: to,
    subject: subject,
    text: text,
  });

  console.log('Email sent: ', info.messageId);
};
