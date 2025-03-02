import nodemailer from 'nodemailer'
import dotenv from "dotenv";

dotenv.config();



 const mailTransporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: Number(process.env.EMAIL_PORT),
  auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
  },
});

async function sendEmail({
  template,
  templateData,
  subject,
}) {


  await mailTransporter.sendMail({
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject,
    text: templateData,
    html: template,
    
  });
}

export default sendEmail;