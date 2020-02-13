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

app.listen(3000, error => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port 3000");
});


app.get("/aboutThisWebsite", (req, res) => {
    const thisWebSite = {
        port: "3000",
        hostname: "localhost:3000 or 127.0.0.1:3000",
        titel: "NodeJs learning website",
        description: "This site is used to learn the basics of NodeJs",
        type: "REST"
    }
    res.send(thisWebSite);
});