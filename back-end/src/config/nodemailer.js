const nodemailer = require('nodemailer');

const usrname = process.env.USRNAME;
const pwd = process.env.PASS;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: usrname,
        pass: pwd
    }
});

module.exports = {
    transporter
}