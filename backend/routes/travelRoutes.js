const express = require('express');
const router = express.Router();
const Travel = require('../models/travelModel');
const protect = require('../middlewares/protectMiddleware');
const upload = require('../middlewares/uploadMiddleware');
const { 
    createTravel, 
    getTravelsByUser, 
    getTravelById, 
    updateTravelById, 
    deleteTravelById 
} = require('../controllers/travelController');

// Create a new travel story
router.post('/', protect, upload.single('image'), createTravel);

// Get all travel stories for a user
router.get('/', protect, getTravelsByUser);

// Get a specific travel story by ID
router.get('/:id', protect, getTravelById);

// Upddate a travel story by ID
router.put('/:id', protect, upload.single('image'), updateTravelById);

// Delete a travel story by ID
router.delete('/:id', protect, deleteTravelById);

module.exports = router;