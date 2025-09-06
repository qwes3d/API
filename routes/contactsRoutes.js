// backend/routes/contacts.js
const express = require("express");
const router = express.Router();

const contactsControllers = require("../controllers/contactsControllers");

// GET all contacts
router.get("/", contactsControllers.getAll);

// GET single contact
router.get("/:id", contactsControllers.getSingle);


// Create
router.post("/", contactsControllers.createContact);

// Update
router.put("/:id", contactsControllers.updateContact);

// Delete
router.delete("/:id", contactsControllers.deleteContact);


module.exports = router;
