const mongodb = require("../db/connect");

const getData = async (req, res, next) => {
  try {
    const db = mongodb.getDb();
    const result = await db.collection("Milo").find({}).toArray();

    res.setHeader("Content-Type", "application/json");
    res.status(200).json(result[0]); // send the first user doc
  } catch (err) {
    res.status(500).json({ message: "Error fetching data", error: err });
  }
};

module.exports = { getData };
