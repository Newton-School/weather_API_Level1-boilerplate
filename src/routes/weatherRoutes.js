const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

/*
  Instructions for students:
  Implement the route handler for the endpoint '/city/:name' that retrieves the weather data for a city by its name.

  Input:
    - :name (string): The name of the city for which weather data needs to be retrieved.

  Output:
    - If the city name is found in the database, send a JSON response with the following structure:
      {
        "status": "success",
        "message": "Weather data retrieved",
        "data": { ... } // Weather data object for the specified city
      }

    - If the city name is not found in the database, send a JSON response with the following structure:
      {
        "status": "error",
        "message": "Failed to retrieve weather data",
        "error": "City not found"
      }

    - If there is any error in retrieving the data, send a JSON response with the following structure:
      {
        "status": "error",
        "message": "Failed to retrieve weather data"
      }

  Tips:
    - Use the getWeatherDataByName(cityName) function from the weatherController module to retrieve the weather data.
    - Access the city name from the request parameters using req.params.name.
    - Call the getWeatherDataByName function and handle the returned result to send the appropriate response.
*/


// Level 1: Get City Weather Data by Name
router.get('/city/:name', async (req, res) => {
   // TODO: Implement this function
});


module.exports = router;
