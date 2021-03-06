const router = require('express').Router();

const User = require('../models/User.js');

router.get('/users/roles', async (req, res) => {
    const users = await User.query().select('username').withGraphFetched('role');
    return res.send({ response: users });
});

router.get('/setsessionvalue', (req, res) => {
    console.log(req.sessionID),
    req.session.myValue = req.sessionID;
    console.log(req.session);
    return res.send({});
});

router.get('/getsessionvalue', (req, res) => {
    return res.send({ response: req.session.myValue });
});

module.exports = router;