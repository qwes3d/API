const { ObjectId } = require('mongodb');
const db = require('../db/connect');



// Basic field validation
function validateContact(body) {
  const required = ['firstName', 'lastName', 'email', 'favoriteColor', 'birthday'];
  for (const key of required) {
    if (!body[key] || String(body[key]).trim() === '') {
      return `Missing or empty field: ${key}`;
    }
  }
  return null;
}


// GET all
const getAll = async (req, res) => {
  try {
    const result = await db.getDb().collection('contacts').find().toArray();
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET single
const getSingle = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const result = await db.getDb().collection('contacts').findOne({ _id: contactId });

    if (!result) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
};

// CREATE
const createContact = async (req, res) => {
  try {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const result = await db.getDb().collection('contacts').insertOne(contact);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
const updateContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const updatedContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };

    const result = await db.getDb().collection('contacts').replaceOne({ _id: contactId }, updatedContact);

    if (result.modifiedCount === 0) {
      return res.status(404).json({ message: 'Contact not found or no changes made' });
    }
    res.status(200).json({ message: 'Contact updated successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
};

// DELETE
const deleteContact = async (req, res) => {
  try {
    const contactId = new ObjectId(req.params.id);
    const result = await db.getDb().collection('contacts').deleteOne({ _id: contactId });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }
    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(400).json({ message: 'Invalid ID format' });
  }
};

module.exports = {
  getAll,
  getSingle,
  createContact,
  updateContact,
  deleteContact
};
