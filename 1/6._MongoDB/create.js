const mongo = require("mongodb").MongoClient;

const connectionUrl = "mongodb://localhost:27017";
const dbName = "animalfarm";

mongo.connect(connectionUrl, {useUnifiedTopology: true}, (error, client) => {
    if (error) {
        throw "Error connecting to mongodb " + error;
    }

    const animalFarmDB = client.db(dbName);
    const buildings = animalFarmDB.collection("buildings");

    buildings.insertOne({"type": "pen"}, (error, success) => {
        console.log(success.insertedCount);
        client.close();
    });
});