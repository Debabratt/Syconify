import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail or custom domain email
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
        
        <!-- Header with logo -->
        <div style="background-color: #ffffff; padding: 20px; text-align: center;">
          <img src="/logo.png" alt="Syconify Logo" style="max-height: 50px ;" />
          <p style="color: #666; margin: 5px 0 0;">New Contact Form Submission</p>
        </div>

        <!-- Body -->
        <div style="padding: 25px; background-color: #f9f9f9;">
          <h2 style="color: #3c626f; margin-top: 0;">${subject || `Message from ${name}`}</h2>
          <div style="background-color: white; padding: 15px; border-radius: 5px; margin-bottom: 20px;">
            <p><strong style="color: #555;">Name:</strong> ${name}</p>
            <p><strong style="color: #555;">Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong style="color: #555;">Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
            <p><strong style="color: #555;">Message:</strong></p>
            <div style="background-color: #f5f5f5; padding: 10px; border-left: 3px solid #3c626f; margin-top: 5px;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <p style="font-size: 14px; color: #777;">
            This message was sent via the Syconify contact form on ${new Date().toLocaleString()}
          </p>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f1f1; padding: 15px; text-align: center; font-size: 12px; color: #666;">
          <p style="margin: 0;">
            © ${new Date().getFullYear()} Syconify. All rights reserved.<br>
            <span style="color: #3c626f;">Pramod Villa, Plot-37/2, Lane 1, Road 2, Jagannath Vihar, Bhubaneswar, Odisha</span>
          </p>
          <p style="margin: 5px 0 0;">
            <a href="https://syconify.com" style="color: #3c626f; text-decoration: none;">Visit our website</a> | 
            <a href="mailto:info@syconify.com" style="color: #3c626f; text-decoration: none;">info@syconify.com</a>
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: `"Syconify Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.COMPANY_EMAIL || 'info@syconify.com',
      subject: subject || `New message from ${name} - Syconify`,
      html: emailHtml,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    });
  }
}
