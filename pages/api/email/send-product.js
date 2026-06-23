const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, productName } = req.body;

    const msg = {
      to: email,
      from: 'your-verified-email@example.com', // Must be verified in SendGrid
      subject: 'Your Product Download',
      text: `Thank you for purchasing ${productName}. Here is your download link...`,
      html: `<strong>Thank you for purchasing ${productName}.</strong>`,
    };

    try {
      await sgMail.send(msg);
      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).end();
  }
}

