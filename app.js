const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: 'emil',
        pass: 'password'
    }
});
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'email',
        to: to,
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Email sent: ' + info.response);
    });
};

// Example usage
sendEmail('coderak@outlook.com', 'Test Email', 'Hello, this is a test email!');
