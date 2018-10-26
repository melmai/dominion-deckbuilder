const express = require('express');
const parser = require('body-parser');
const path = require('path');
require('dotenv').config();

// models
const Card = require('./client/src/models/Card');
const Deck = require('./client/src/models/Deck');

const app = express();
app.set('port', process.env.PORT || 4000);
app.use('/api', require('cors')()); // set Access-Control-Allow-Origin header for api route
app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
//app.use(express.static(path.join(__dirname, 'client', 'build'))); // production
app.use(express.static(__dirname + '/client/public')); // development

// API Routing
// READ (get all)
app.get('/api/cards', (req, res) => {
    Card.find((err, results) => {
        if (results) {
            res.json(results);
        } else {
            return res.status(500).send('Error occurred: database error.');
        }
    });
});

// READ (get all cards from single box)
app.get('/api/cards/:box', (req, res) => {
    const box = req.params.box;
    Card.find({
        'box': box
    }, (err, result) => {
        if (err) return err;
        if (result) {
            res.json(result);
        } else {
            res.json({
                'message': 'No cards found for this box!'
            });
        }
    });
});

// READ (get all cards from single box by type)
app.get('/api/cards/:box/:type', (req, res) => {
    const box = req.params.box;
    const type = req.params.type;

    Card.find({ 'box': box,'class': type }, (err, result) => {
        if (err) return err;
        if (result) {
            res.json(result);
        } else {
            res.json({
                'message': 'No cards of this type found for this box!'
            });
        }
    });
});

// READ (get one card)
app.get('/api/card/:id', (req, res) => {
    const id = req.params.id;
    Card.find({ '_id': id }, (err, result) => {
        if (err) return err;
        if (result) {
            res.json(result);
        } else {
            res.json({
                'message': 'No Card found!'
            });
        }
    });
});

// READ (get all suggested decks)
app.get('/api/decks', (req, res) => {
    Deck.find((err, result) => {
        if (err) return err;
        if (result) {
            res.json(result);
        } else {
            res.json({
                'message': 'No cards of this type found for this box!'
            });
        }
    });
});

// READ (get one deck)
app.get('/api/deck/:id', (req, res) => {
    const id = req.params.id;
    Deck.find({ _id: id }, (err, result) => {
        if (err) return err;
        if (result) {
            res.json(result);
        } else {
            res.json({
                'message': 'No cards of this type found for this box!'
            });
        }
    });
});

// routing
//app.get('/*', (req, res) => res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))); // production
app.get('/', (req, res) => res.sendFile('index.html', {root: path.join(__dirname)})); // development

// 404 Error
app.use((req, res) => {
    res.status(404);
    res.send('404');
});

// 500 Error
app.use((err, req, res) => {
    res.status(500);
    res.send('500');
});

app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; Ctrl-C to end.');
});
