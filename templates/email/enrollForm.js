

// HTML Template for the email
export const generateEnrollEmailTemplate = (name, email, phone, stream) => {
    return `
  <!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4; color: #333333;">
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;">
        <tr>
            <td style="padding: 20px 0; text-align: center; background-color: #4a7aff;">
                <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">New Contact Form Submission</h1>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px;">
                <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 5px; box-shadow: 0 3px 5px rgba(0,0,0,0.1);">
                    <tr>
                        <td style="padding: 30px;">
                            <p style="margin: 0 0 20px; font-size: 16px; line-height: 24px;">You have received a new message from your website contact form.</p>
                            
                            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; width: 120px; font-weight: bold; color: #555555;">Full Name:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555;">Email Address:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${email}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555;">Phone Number:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${phone}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee; font-weight: bold; color: #555555;">Stream:</td>
                                    <td style="padding: 10px; border-bottom: 1px solid #eeeeee;">${stream}</td>
                                </tr>
                            </table>
                            
                            
                            
                            <p style="margin: 0; font-size: 14px; color: #777777; text-align: center; padding-top: 15px; border-top: 1px solid #eeeeee;">This email was sent from your website contact form.</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px; text-align: center; font-size: 12px; color: #777777;">
                <p style="margin: 0 0 10px;">&copy; 2025 Your Company. All rights reserved.</p>
                <p style="margin: 0;">123 Your Street, Your City, Your Country</p>
            </td>
        </tr>
    </table>
</body>
</html>
  `;
};
