const request = require('request');

const getGeoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiamFnamVldHNzcyIsImEiOiJjazhsdGlvdTQwMjlkM2VudzY1bHplNnV4In0.4B3B3M3nfo3WD0DjPw0taQ&limit=1`;

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback(error, undefined);
        } else {
            try {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                });
            } catch (e) {
                callback(e, undefined)
            }
        }
    });
}

module.exports = {
    getGeoCode
}