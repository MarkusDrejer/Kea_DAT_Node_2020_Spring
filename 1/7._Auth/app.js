const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const session = require('express-session');
app.use(session({
    secret: require('./config/mysqlCredentials.js').sessionSecret,
    resave: false,
    saveUninitialized: true
  }));

const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 8
});
app.use("/login", limiter);
app.use("/signup", limiter);
app.use(express.static("public"));

/* Setup Objection + Knex */
const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile.js');

// Initialize knex.
const knex = Knex(knexFile.development);

// Give the knex instance to objection.
Model.knex(knex);

/* Add Routes */
const authRoute = require('./routes/auth.js');
const usersRoute = require('./routes/users.js');
const contentRoute = require('./routes/content.js');
app.use(authRoute);
app.use(usersRoute);
app.use(contentRoute);


/* Start Server */
const PORT = 3000;

app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
});