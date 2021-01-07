const express = require('express');

const { body } = require('express-validator');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/userprofiles
router.get('/userprofiles', feedController.getSearchHistory);

// POST /feed/userprofile
router.post('/userprofile', feedController.createUserProfile);

// /feed/userprofile/:
router.put('/userprofile/:profileId', 
      [
        body('login'),
        body('isFavorite')  
      ],
        feedController.updateProfile
);

// - /feed//del-history/:profileId
router.delete('/del-history/:profileId', feedController.deleteSearchHistory);

module.exports = router;