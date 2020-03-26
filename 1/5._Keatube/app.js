const express = require("express");
const app = express();

const fs = require("fs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//define one or more folders that express will look into when referencing some static content
//also includes css and js files
app.use(express.static("public"));
app.use(express.static("videos"));

const navbarPage = fs.readFileSync("public/navbar/navbar.html", "utf8");
const footerPage = fs.readFileSync("public/footer/footer.html", "utf8");
const frontpagePage = fs.readFileSync("public/frontpage/frontpage.html", "utf8");
const playerPage = fs.readFileSync("public/player/player.html", "utf8");
const uploadPage = fs.readFileSync("public/upload/upload.html", "utf8");

//SSR = Server Side Rendering

const port = process.env.PORT ? process.env.PORT : 3000;

app.get("/", (req, res) => {
    return res.send(navbarPage + frontpagePage + footerPage);
});

app.get("/player/:videoid", (req, res) => {
    return res.send(navbarPage + playerPage + footerPage);
});

app.get("/upload", (req, res) => {
    return res.send(navbarPage + uploadPage + footerPage);
});

//Import routes
const videosRoute = require("./routes/videos");

//Setup routes
app.use(videosRoute);

const server = app.listen(port, (error) => {
    if(error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", server.address().port);
});