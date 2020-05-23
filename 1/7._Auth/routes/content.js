const router = require('express').Router();
const path = require('path');
const nodemailer = require('nodemailer');

router.get("/", (req, res) => {
    if(req.session.user) {
        return res.sendFile(path.join(__dirname, '../public/mainPage/mainPage.html'));
    }
    return res.redirect('/login');
});

router.get("/sendEmail", (req, res) => {
    if(req.session.user) {
        return res.sendFile(path.join(__dirname, '../public/email/email.html'));
    }
    return res.redirect('/login');
});

router.post("/sendEmail", async (req, res) => {
    const {to, from, subject, message} = req.body;
    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            pool: true,
            requireTLS: true,
            auth: {
                user: "FreeSmtpNodeServer@gmail.com",
                pass: "NodeSMTPServer"
            }
        });

        const info = await transporter.sendMail({
            from: `"${req.session.user.username}" <${from}>`,
            to: to,
            subject: subject,
            text: message
        });
        transporter.close();

        return res.status(200).send({ response: "OK" });
    } catch(error) {
        return res.status(400).send({ response: "Something went wrong: ", error})
    }
});

module.exports = router;