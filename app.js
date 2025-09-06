const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const MongoDB = require("./db/connect");

const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());


// Root route


//app.use(express.static(path.join(__dirname, '../frontend/public')));


// 👇 Root route (homepage)

app.use("/contacts", contactsRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Contacts API 🚀");
});

console.log("Mongo URI:", process.env.MONGODB_URI);

MongoDB.initDb((err, mongodb) => {
    if (err) {
        console.error("❌ Failed to connect to MongoDB:", err);
    } else {
        app.listen(port, () => {
            console.log(`✅ Connected to Db and listening on : ${port}`);
        });
    }
});
