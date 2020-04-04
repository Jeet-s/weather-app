const request = require('request');

const getForcast = (latitude, longitude, callback) => {
const url = `http://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}&appid=6cf9805fc6f47449dbded7516ccd78fd&units=metric`;

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback(error, undefined);
        } else if (response.error){
            callback(response.error, undefined);
        } else {
            callback(undefined, response.body);
        }
    });
}

module.exports = {
    getForcast
}