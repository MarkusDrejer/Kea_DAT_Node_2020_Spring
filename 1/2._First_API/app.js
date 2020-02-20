//require is import
const express = require("express");
const request = require('request');
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
    res.send(me)
});

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

app.get("/allOfUs", (req, res) => {
    const me = {
        firstName: "Markus", 
        lastName: "Drejer", 
        city: "Copenhagen S", 
        profession: "Computers"
    }
    const you = {
        firstName: "Thomas", 
        lastName: "Vindelev", 
        city: "Copenhagen H", 
        profession: "Computers"
    }
    const someoneElse = {
        firstName: "Anders",
        lastName: "Latif",
        city: "Copenhagen H",
        profession: "Lecturer"
    }
    const us = {
        me, 
        you,
        someoneElse
    }
    res.send(us)
});

app.get("/time", (req, res) => {
    const date = new Date();
    return res.send({
        date: date.getDate(), 
        month: convertMonth(date.getMonth()),
        year: date.getFullYear(),
        time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(),
        day: convertDay(date.getDay()),
        anotherDay: date.toLocaleString("en-us", {weekday: "long"})
    });
});

const convertDay = (dayIndex) => {
    const dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return dayArray[dayIndex];
};

const convertMonth = (monthIndex) => {
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return monthArray[monthIndex];
};

app.get("/user/:id", (req, res) => {
    console.log(req.params);
    return res.send({
        id: req.params.id
    });
});

app.get("/search", (req, res) => {

    return res.send({
        query: req.query.id
    });
});

app.get("/google", (req, res) => {
    request('http://www.google.com', (error, response, body) => {
        console.error('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        console.log('body:', body); // Print the HTML for the Google homepage.
        return res.send(body);
    });
});

app.get("/documentation", (req, res) => {
    //return res.redirect("/documentationtwo");
    return res.sendFile(__dirname + "/public/documentation.html");
});

//Universal weird route to point to any file in the system via a path variable
//app.get("/:name", (req, res) => {
//    return res.sendFile(__dirname + "/public/" + req.params.name + ".html");
//});

app.get("/documentationtwo", (req, res) => {
    return res.sendFile(__dirname + "/public/documentationtwo.html");
});