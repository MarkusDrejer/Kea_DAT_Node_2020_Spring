const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

const port = process.env.PORT ? process.env.PORT : 3000;

app.get("/video/:videoid", (req, res) => {
    return res.sendFile(`${__dirname}/public/video.html`);
});

const server = app.listen(port, (error) => {
    if(error) {
        console.log("Error running the server", error);
    }
    console.log("Server is running on port", server.address().port);
});