const request = require('request');

const geoCode = require('./utils/geoCode');
const forcast = require('./utils/forcast');

if (process.argv[2]) {
    geoCode.getGeoCode(process.argv[2], (error, {latitude, longitude, location}) => {
        if (error) {
            console.log('Error Fetching data');
        } else {
            forcast.getForcast(latitude, longitude, (error, {temp}) => {
                if (error) {
                    console.log('Error Fetching data')
                } else {
                    console.log(`It is currently ${temp} degree Celsius in ${location}`);
                }
            })
        }
    });
} else {
    console.log('Please provide city name');
}

