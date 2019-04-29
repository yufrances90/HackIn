const { emailConfig } = require('../config');

const sendEmail = (
    text, fromEmail, toEmail, subject, attachments
) => {

    return new Promise((resolve, reject) => {

        emailConfig.transporter.sendMail({
            from: fromEmail,
            to: toEmail,
            subject,
            text,
            attachments
        }, (err, info) => {
    
            if(err) {
                reject(err);
            } else {
                resolve(info);
            }
        })
    });
}

module.exports = {
    sendEmail
}