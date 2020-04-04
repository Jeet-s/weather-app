const request = require('request');

const getForcast = (latitude, longitude, callback) => {
const url = `http://api.openweathermap.org/data/2.5/weather?lat=${encodeURIComponent(latitude)}&lon=${encodeURIComponent(longitude)}&appid=6cf9805fc6f47449dbded7516ccd78fd&units=metric`;

    request({ url, json: true }, (error, {body, error: responseError}) => {
        if (error) {
            callback(error, undefined);
        } else if (responseError){
            callback(responseError, undefined);
        } else {
            callback(undefined, body.main);
        }
    });
}

module.exports = {
    getForcast
}