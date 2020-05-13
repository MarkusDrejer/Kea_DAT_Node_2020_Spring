const router = require('express').Router();
const path = require('path');

const User = require('../models/User.js');
const Role = require("../models/Role.js");

const bcrypt = require('bcrypt');
const saltRounds = 12;

router.get('/login', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/auth/login.html'));
});

router.post('/login', async (req, res) => {
    const {username, password} = req.body;

    try {
        const userFound = await User.query().select().where('username', username);
        if (userFound.length === 0) {
            return res.status(400).send({ response: "User does not exist" });
        } 

        const match = await bcrypt.compare(password, userFound[0].password);
        if(match) {
            //Make session on success
            req.session.username = username;
            return res.redirect("/");
        }
    } catch(error) {
        return res.status(500).send({ response: "Something went wrong with the database" });
    }

    return res.status(400).send({ response: "Incorrect password" });
});

router.get('/signup', (req, res) => {
    return res.sendFile(path.join(__dirname, '../public/auth/signup.html'));
});

router.post('/signup', async (req, res) => {
    const {username, password, passwordRepeat} = req.body;

    const isPasswordTheSame = password === passwordRepeat;

    if(username && password && isPasswordTheSame) {
        if(password.length < 8) {
            return res.status(400).send({ response: "Password does not fulfill the requirements" });

        } try {
            const userFound = await User.query().select().where('username', username);
            if (userFound.length > 0) {
                return res.status(400).send({ response: "Username already exists" });
            }

            const userRole = await Role.query().select().where('role', 'USER');
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const user = await User.query().insert({
                username: username,
                password: hashedPassword,
                role_id: userRole[0].id
            });
            
            //Direct login and set up session
            req.session.username = username;
            return res.redirect("/");

        } catch(error) {
            return res.status(500).send({ response: "Something went wrong with the database" });
        }

    } else if (password && passwordRepeat && !isPasswordTheSame) {
        return res.status(400).send({ response: "Passwords do not match" });
    } 

    return res.status(404).send({ response: "Missing fields: username, password or passwordRepeat" });
});

router.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if(error) {
            return res.send({ response: "Something went wrong: ", error })
        }
        return res.redirect("/login");
    });
});

module.exports = router;