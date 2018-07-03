const express = require('express');
const parser = require('body-parser');
const path = require('path');

// models
const Card = require('./models/Card');
const Deck = require('./models/Deck');

const app = express();
app.set('port', process.env.PORT || 4000);
app.use('/api', require('cors')()); // set Access-Control-Allow-Origin header for api route
app.use(parser.json());
app.use(parser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/public'));

// routing
app.get('/', (req, res) => res.sendFile('index.html', {root: path.join(__dirname)}));

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

/* // CREATE
app.post('/api/cards/add', (req, res) => {
    const newCard = new Card();
    newCard.title = req.body.title || '';
    newCard.author = req.body.author || '';
    newCard.pubDate = req.body.pubDate || '';

    newCard.save((err) => {
        if (err) res.send(err);
        res.json({
            'message': 'Card added!'
        });
    });
});

// UPDATE
app.post('/api/card/update/:id', (req, res) => {
    const id = req.params.id;
    const updatedCard = req.body;

    Card.findByIdAndUpdate(id, updatedCard, {
        new: true
    }, (err) => {
        if (err) res.send(err);
        res.json({
            'message': 'Card updated!'
        });
    });
});


// DELETE
app.delete('/api/card/delete/:id', (req, res) => {
    const id = req.params.id;

    Card.remove({
        '_id': id
    }, (err, result) => {
        if (err) return err;
        if (result.n) {
            res.json({
                'message': 'Card deleted'
            });
        } else {
            res.json({
                'message': 'No Card found by that name'
            });
        }
    });
}); */

// 404 Error
app.use((req, res) => {
    res.status(404);
    res.render('404');
});

// 500 Error
app.use((err, req, res) => {
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; Ctrl-C to end.');
});
