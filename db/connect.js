const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;
let _db;
const initDb = (callback) => {
    if (_db) {
        console.log("Db is already initialized");
        return callback(null, _db);
    }
   
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            // Select the "milo" database
            _db = client.db("CSE340");
            console.log("Connected to MongoDB:", _db.databaseName);
            return callback(null, _db);
        })
        .catch((err) => {
            return callback(err);
        });
};
const getDb = () => {
    if (!_db) {
        throw Error("Db not initialized");
    }
    return _db;
};

module.exports = { initDb, getDb };
