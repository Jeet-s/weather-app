const request = require('request');

const geoCode = require('./utils/geoCode');
const forcast = require('./utils/forcast');

if (process.argv[2]) {
    geoCode.getGeoCode(process.argv[2], (error, data) => {
        if (error) {
            console.log('Error Fetching data');
        } else {
            forcast.getForcast(data.latitude, data.longitude, (error, forcastData) => {
                if (error) {
                    console.log('Error Fetching data')
                } else {
                    console.log(`It is currently ${forcastData.main.temp} degree Celsius in ${data.location}`);
                }
            })
        }
    });
} else {
    console.log('Please provide city name');
}

