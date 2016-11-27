var express = require('express');
var app = module.exports = express();
var fs = require('fs');

app.start = function(){

    // les routes de mon API (un GET et un POST)
    app.get('/places', app.__getPlaces); // renvoie la liste des endroits enregistrés
    app.post('/place/:lat/:long', app.__postPlace); // enregistre un nouvel endroit (latitude et longitude)

    console.log('Le serveur vous écoute sur le port 9876...');
    app.listen(9876);
};

function appendObject(obj){
    var placesFile = fs.readFileSync('places.json');
    var places = JSON.parse(placesFile);
    places.push(obj);
    var placesJSON = JSON.stringify(places);
    fs.writeFileSync('places.json', placesJSON);
}

app.__getPlaces = function(req, res) {
    fs.readFile('places.json', 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        //console.log(data);
        return res.send(data);
    });
}

app.__postPlace = function(req, res) {
    var lat = req.params['lat'];
    var long = req.params['long'];
    var json = {
        lat: Number(lat),
        long: Number(long)
    };
    appendObject(json);
    return res.send({resultat: 'ok'});
}