const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Level 1: Get City Weather Data by Name
router.get('/city/:name', async (req, res) => {
   // TODO: Implement this function
});


module.exports = router;
