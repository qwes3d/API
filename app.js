const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const MongoDB = require("./db/connect");

const professionalRoutes = require('./routes/professionalRoutes');
const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

// Root route


app.use(express.static(path.join(__dirname, '../frontend/public')));



// Routes
app.use('/professional', professionalRoutes);
app.use('/contacts', contactsRoutes);

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
