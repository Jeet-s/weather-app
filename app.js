const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=28.644800&lon=77.216721&appid=6cf9805fc6f47449dbded7516ccd78fd&units=metric';

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body);
    console.log(`It is currently ${data.main.temp} degree Celsius out`);
});