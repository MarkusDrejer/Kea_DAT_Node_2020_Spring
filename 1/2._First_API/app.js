const express = require("express");
const app = express();

//One liner:
//const app = require("express")();

app.get("/", (req, res) => {
    res.send({message: "Hello"});
});

app.get("/aboutMe", (req, res) => {
    const me = {
        firstName: "Markus", 
        lastName: "Drejer", 
        city: "Copenhagen", 
        profession: "Computers"
    }
    const you = {
        firstName: "Thomas", 
        lastName: "Vindelev", 
        city: "Copenhagen", 
        profession: "Computers"
    }
    const us = {
        me, 
        you
    }
    res.send(us)
})

app.listen(3000);