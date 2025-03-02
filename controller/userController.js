
import sendEmail from './Helper/sendEmail.js'
import { generateContactEmailTemplate } from '../templates/email/contactForm.js';
import { generateEnrollEmailTemplate } from '../templates/email/enrollForm.js';

const postContactData = async (req, res) => {
  try {
    const { email, name, mobile,message } = req.body;
    console.log(email, name, mobile);

    const emailHtml = generateContactEmailTemplate(name, email, mobile, message);

    const emailResponse = await sendEmail({
      template: emailHtml,
      templateData: emailHtml,
      subject: `New Enquiry`,
    })

    res.status(200).send({
      message: 'Email sent successfully,We will connect you soon...',
      data: emailResponse,
    });
  } catch (error) {
    console.error('Error in enquiryData:', error);

    res.status(500).send({
      message: 'Failed to send email',
      error: error.message || error,
    });
  }
}


const postEnrollContactData = async (req, res) => {
  try {
    const { email, name, mobile,stream } = req.body;

    const emailHtml = generateEnrollEmailTemplate(name, email, mobile, stream);

    const emailResponse = await sendEmail({
      template: emailHtml,
      templateData: emailHtml,
      subject: `New Enquiry`,
    })

    res.status(200).send({
      message: 'Email sent successfully,We will connect you soon...',
      data: emailResponse,
    });
  } catch (error) {
    console.error('Error in enquiryData:', error);

    res.status(500).send({
      message: 'Failed to send email',
      error: error.message || error,
    });
  }
}

export { postContactData,postEnrollContactData }



