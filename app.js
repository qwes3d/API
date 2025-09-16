const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');


const MongoDB = require("./db/connect");

const contactsRoutes = require('./routes/contactsRoutes');

const app = express();
const port = process.env.PORT || 8080;

// Updated the servers URL in swagger.json dynamically for Render
const BASE_URL = process.env.BASE_URL;
swaggerDocument.servers = [{ url: BASE_URL }];

app.use(bodyParser.json());


// Root route


//app.use(express.static(path.join(__dirname, '../frontend/public')));


// 👇 Root route (homepage)
app.get("/", (req, res) => {
  res.send("Welcome to the Contacts API. ATTENTION!!!  Use /contacts to access data.");
});


// Swagger UI at /api-docs
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// Contacts routes
app.use("/contacts", contactsRoutes);

// Error handling
app.use((req, res) => {
  res.status(404).send("Route not found");
});

console.log("Mongo URI:", process.env.MONGODB_URI);

MongoDB.initDb((err, mongodb) => {
    if (err) {
        console.error("❌ Failed to connect to MongoDB:", err);
    } else {
        app.listen(port, () => {
            console.log(`✅ Connected to Db and listening on : ${port}`);
            console.log(`📘 Swagger docs available at http://localhost:${port}/api-docs`);
            console.log(`🌐 production URL is set to: https://contactsapi-ofmk.onrender.com`);
            console.log(`📂 swagger production at https://contactsapi-ofmk.onrender.com/api-docs`);

        });
    }
});
