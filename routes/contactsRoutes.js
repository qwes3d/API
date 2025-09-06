const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsControllers');

// GET all contacts
router.get('/', contactsController.getAll);

// GET single contact by _id
router.get('/:id', contactsController.getSingle);

// POST new contact
router.post('/', contactsController.createContact);

// PUT (update) contact by _id
router.put('/:id', contactsController.updateContact);

// DELETE contact by _id
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
