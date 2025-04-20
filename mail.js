const nodemailer = require('nodemailer');

// List of email recipients
const recipients = [



  
  // ...up to 20
];

// Create a transporter object using Gmail
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sagarhr8853@gmail.com',
    pass: "ogkv jnmg xsfw qdjx" , // Use App Password if 2FA is on
  },
});
const abc = `





Sagar HR


`;

// text for mail 
const mailOptions = {
  from: '"Sagar HR" <sagarhr8853@gmail.com>',
  subject: 'Join Us at Molecules: Enjoy Up to 50% Off This Week!',     // text for subject
  text: abc
};


async function sendEmails() {
  for (const recipient of recipients) {
    const options = { ...mailOptions, to: recipient };

    try {
      let info = await transporter.sendMail(options);
      console.log(`Email sent to ${recipient}: ${info.messageId}`);
    } catch (error) {
      console.error(`Failed to send to ${recipient}:`, error.message);
    }
  }
}

sendEmails();   