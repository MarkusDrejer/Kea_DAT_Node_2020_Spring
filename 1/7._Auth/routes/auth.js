const router = require('express').Router();
const User = require('../models/User.js');
const Role = require("../models/Role.js");

router.post('/login', (req, res) => {

});

router.post('/signup', async (req, res) => {
    //const users = await User.query().select();
    const {username, password, passwordRepeat} = req.body;

    const isPasswordTheSame = password === passwordRepeat;

    if(username && password && isPasswordTheSame) {
        if(password.length < 8) {
            return res.status(400).send({ response: "Password does not fulfill the requirements" });
        } else {
            try {

                const userFound = await User.query().select().where('username', username);
                if (userFound.length > 0) {
                    return res.status(400).send({ response: "Username already exists" });
                } else {
                    const role = await Role.query().select().where('role', 'USER');
                    const user = await User.query().insert({
                        username: username,
                        password: password,
                        role_id: role[0].id
                    });
                    return res.send({ response: user });
                }
            } catch(error) {
                return res.status(500).send({ response: "Something went wrong with the database" });
            }
        }
    } else if (password && passwordRepeat && !isPasswordTheSame) {
        return res.status(400).send({ response: "Passwords do not match" });
    } else {
        return res.status(404).send({ response: "Missing fields: username, password or passwordRepeat" });
    }

});

router.get('/logout', (req, res) => {

});

module.exports = router;