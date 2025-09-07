const express = require('express');
const router = express.Router();
const contactsController = require('../controllers/contactsControllers');

// GET all contacts


/**
 * @swagger
 * tags:
 *   name: Contacts
 *   description: Contacts management
 */

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     tags: [Contacts]
 *     responses:
 *       200:
 *         description: Array of contacts
 */

router.get('/', contactsController.getAll);


// GET single contact by _id
/**
 * @swagger
 * /contacts/{id}:
 *   get:
 *     summary: Get a contact by id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200: { description: Contact }
 *       400: { description: Invalid id }
 *       404: { description: Not found }
 */
router.get('/:id', contactsController.getSingle);



// POST new contact


/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     tags: [Contacts]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [firstName, lastName, email, favoriteColor, birthday]
 *             properties:
 *               firstName: { type: string }
 *               lastName: { type: string }
 *               email: { type: string }
 *               favoriteColor: { type: string }
 *               birthday: { type: string, example: "1990-01-01" }
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id: { type: string }
 *       400: { description: Validation error }
 */
router.post('/', contactsController.createContact);



// PUT (update) contact by _id


/**
 * @swagger
 * /contacts/{id}:
 *   put:
 *     summary: Update a contact by id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       204: { description: Updated }
 *       400: { description: Invalid id or validation error }
 *       404: { description: Not found }
 */
router.put('/:id', contactsController.updateContact);



// DELETE contact by _id


/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete a contact by id
 *     tags: [Contacts]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       204: { description: Deleted }
 *       400: { description: Invalid id }
 *       404: { description: Not found }
 */
router.delete('/:id', contactsController.deleteContact);

module.exports = router;
