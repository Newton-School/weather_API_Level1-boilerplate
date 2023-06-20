const fs = require('fs');

async function getDataFromDatabase() {
  return new Promise((resolve, reject) => {
    fs.readFile('src/data/data.json', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data));
      }
    });
  });
}

async function saveDataToDatabase(data) {
  return new Promise((resolve, reject) => {
    const jsonData = JSON.stringify(data);
    fs.writeFile('src/data/data.json', jsonData, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}


/*
  Instructions for students:
  Implement the function getWeatherDataByName(cityName) that retrieves the weather data for a given city name.

  Database:
    - The weather data is stored in the 'src/data/data.json' file.

  Tips:
    - Use the getDataFromDatabase() function to retrieve the data from the database.
    - Iterate through the weather data array and check if the 'city' property matches the given cityName.
    - Return the appropriate response based on the search result.
*/

// Level 1: Get City Weather Data by Name
async function getWeatherDataByName(cityName) {
   // TODO: Implement this function
}


module.exports = {
  getWeatherDataByName
};
