const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactsControllers");

// GET all contacts
router.get("/", contactsController.getAll);

// GET one contact by ID
//router.get("/:id", contactsController.getSingle);

// CREATE new contact
//router.post("/", contactsController.createContact);

// UPDATE contact by ID
//router.put("/:id", contactsController.updateContact);

// DELETE contact by ID
//router.delete("/:id", contactsController.deleteContact);

module.exports = router;
