const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

async function seedDB() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const db = client.db("CSE340"); // change if using another DB
    const contacts = db.collection("contacts");

    await contacts.insertMany([
      {
        firstName: "Chidiebere",
        lastName: "Anyalechi",
        email: "chidiebere@example.com",
        favoriteColor: "Blue",
        birthday: "1994-07-20"
      },
      {
        firstName: "Milo",
        lastName: "Brown",
        email: "milo@example.com",
        favoriteColor: "Green",
        birthday: "1992-05-12"
      },
      {
        firstName: "Sarah",
        lastName: "Johnson",
        email: "sarahj@example.com",
        favoriteColor: "Purple",
        birthday: "1990-11-03"
      }
    ]);

    console.log("Contacts inserted successfully ✅");
  } catch (err) {
    console.error("Error seeding DB:", err);
  } finally {
    await client.close();
  }
}

seedDB();
