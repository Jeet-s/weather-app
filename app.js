const request = require('request');

const url = 'http://api.openweathermap.org/data/2.5/weather?lat=28.644800&lon=77.216721&appid=6cf9805fc6f47449dbded7516ccd78fd&units=metric';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Error Fetching data')
    } else if (response.error){
        console.log(response.error)
    } else {
        const data = response.body;
        console.log(`It is currently ${data.main.temp} degree Celsius out`);
    }
});

const geoLocUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/punjab%20india.json?access_token=pk.eyJ1IjoiamFnamVldHNzcyIsImEiOiJjazhsdGlvdTQwMjlkM2VudzY1bHplNnV4In0.4B3B3M3nfo3WD0DjPw0taQ&limit=1';

request({ url: geoLocUrl, json: true }, (error, response) => {
    if (error) {
        console.log('Error Fetching data');
    } else {
        try {
            console.log(`lat: `, response.body.features[0].center[0]);
            console.log(`long: `, response.body.features[0].center[1]);
            console.log('place: ', response.body.features[0].place_name);
        } catch (e) {
            console.log(e);
        }
    }
});

