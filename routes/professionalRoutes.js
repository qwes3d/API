const express = require("express");
const router = express.Router();
const db = require("../db/connect");


const professionalController = require("../controllers/professionalController");


router.get("/", async (req, res) => {
  try {
    const data = await db.getDb().collection("Milo").findOne({});
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error fetching professional data", error: err });
  }
});

module.exports = router;

//const getMiloDocs = async (req, res) => {
  //try {
  //  const database = db.getDb();
   // const miloCollection = database.collection("milo"); // ✅ collection inside CSE340
  //  const docs = await miloCollection.find().toArray();
  //  res.json(docs);
//  } catch (err) {
//    res.status(500).json({ message: err.message });
//  }
//};

