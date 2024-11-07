const express = require('express');
const router = express.Router();
const cakeController = require('../controllers/cake');
const authMiddleware = require('../middlewares/auth');

//Define the CRUD api routes

//GET projects
router.get('/', cakeController.getAllCakes);

//GET projects by id
router.get('/:id', cakeController.getCakeById);

//POST projects
router.post('/', authMiddleware, cakeController.createCake);

//PUT project
router.put('/:id', authMiddleware, cakeController.updateCake);

//Delete Project
router.delete('/:id', authMiddleware, cakeController.deleteCake);

module.exports = router;