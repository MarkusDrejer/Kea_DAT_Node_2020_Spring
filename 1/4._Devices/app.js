const express = require("express");
const app = express();

let devices = [
    {id: 1, type: "Computer"},
    {id: 2, type: "Smart Watch"}
];

app.get("/", (req, res) => {
    const info = {
        about: "This API handles CRUD on devices like PC's, Mobiles and Tablets"
    }
    return res.send(info);
});

app.get("/devices", (req, res) => {
    return res.send({devices: devices});
});

app.get("/devices/:id", (req, res) => {
    const device = devices.find(device => device.id === Number(req.params.id));
    return res.send({
        device: device
    });
});

app.post("/test", (req, res) => {
    return res.send({});
});

const server = app.listen(3000, (error) => {
    if (error) {
        console.log("Error running the server");
    }
    console.log("Server is running on port", server.address().port);
});