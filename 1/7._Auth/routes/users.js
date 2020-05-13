const router = require('express').Router();
const path = require('path');

const User = require('../models/User.js');

router.get("/", (req, res) => {
    if(req.session.username) {
        res.sendFile(path.join(__dirname, '../public/content/mainPage.html'));
    } else {
        return res.redirect('/login');
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