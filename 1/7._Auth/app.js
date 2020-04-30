const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

/* Setup Objection + Knex */
const { Model } = require('objection');
const Knex = require('knex');
const knexFile = require('./knexfile.js');

// Initialize knex.
const knex = Knex(knexFile.development);

// Give the knex instance to objection.
Model.knex(knex);

/* Add Routes */
const authRoutes = require('./routes/auth.js');
app.use(authRoutes);


/* Start Server */
const PORT = 3000;

app.listen(PORT, (error) => {
    if(error) {
        console.log(error);
    }
    console.log("Server is running on port", PORT);
});