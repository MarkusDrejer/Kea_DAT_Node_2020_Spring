const router = require('express').Router();
const path = require('path');
const nodemailer = require('nodemailer');

const User = require('../models/User.js');

router.get("/", (req, res) => {
    if(req.session.username) {
        return res.sendFile(path.join(__dirname, '../public/content/mainPage.html'));
    }
    return res.redirect('/login');
});

router.get("/sendEmail", (req, res) => {
    if(req.session.username) {
        return res.sendFile(path.join(__dirname, '../public/content/sendEmail.html'));
    }
    return res.redirect('/login');
});

router.post("/sendEmail", async (req, res) => {
    const {from, to, subject, text} = req.body;
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
            from: `"${req.session.username}" <${from}>`,
            to: to,
            subject: subject,
            text: text
            //html: "<b>Hello world?<b>"
        });
        transporter.close();

        return res.status(200).send({ response: "OK" });
    } catch(error) {
        return res.status(400).send({ response: "Something went wrong: ", error})
    }
});

// router.get('/users/roles', async (req, res) => {
//     const users = await User.query().select('username').withGraphFetched('role');
//     return res.send({response: users});
// });

// router.get('/setsessionvalue', (req, res) => {
//     console.log(req.sessionID),
//     req.session.myValue = req.sessionID;
//     console.log(req.session);
//     return res.send({});
// });

// router.get('/getsessionvalue', (req, res) => {
//     return res.send({response: req.session.myValue});
// });

module.exports = router;