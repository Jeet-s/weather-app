const path = require('path');

const express = require('express')
const hbs = require('hbs')

const geoCode = require('../utils/geoCode');
const forcast = require('../utils/forcast');

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather'
    })
});

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: 'Address is required'
        });
    }

    geoCode.getGeoCode(req.query.address, (error, {latitude, longitude, location} = {}) => {
        if (error) {
            return res.send({
                error: 'Unable to find location'
            });
        } else {
            forcast.getForcast(latitude, longitude, (error, data) => {
                if (error) {
                    return res.send({
                        error: 'Unable to find location'
                    });
                } else {
                    res.send({ location, forcast: data, address: req.query.address});
                }
            })
        }
    });
});

app.get('*', (req, res) => {
    res.render('error', {
        title: '404',
        errorMessage: 'Page not found.'
    })
});

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
});
