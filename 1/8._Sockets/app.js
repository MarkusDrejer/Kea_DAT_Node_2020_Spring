const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

const escape = require('escape-html');
const helmet = require('helmet');
app.use(helmet());

io.on('connection', (socket) => {
    // console.log("Socket joined", socket.id);

    socket.on("I'm thinking about this", ({thoughts}) => {
        // console.log(data.thoughts + " heyeheyehey")
        io.emit("Someone said", {thoughts: escape(thoughts)});
        //socket.broadcast.emit("Someone said", {thoughts});
    });

    socket.on("Color change", ({color}) => {
        io.emit("Color has changed", {color: escape(color)});
    });

    // socket.on('disconnect', () => {
    //     console.log("Socket left", socket.id);
    // });
});

app.get("/", (req, res) => {
    return res.sendFile(__dirname + "/index.html");
});

app.get("/color", (req, res) => {
    return res.sendFile(__dirname + "/color.html");
});

server.listen(3000);