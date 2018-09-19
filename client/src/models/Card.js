const mongoose = require('mongoose');
//const credentials = require('../credentials');
mongoose.connect(process.env.MONGODB_URI);
//mongoose.connect(credentials.mongo.development.connectionString);

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

const mySchema = mongoose.Schema({
    _id: Number,
    name: {
        type: String,
        required: true
    },
    cost: Number,
    class: [String],
    abilities: {
        buy: Number,
        card: Number,
        action: Number,
        money: Number,
        trash: Number
    },
    text: String,
    box: String,
    journeyToken: Boolean,
    heirloom: String,
    linkedCard: String,
    /* strategy: {
        trash: Boolean,
        filter: Boolean,
        draw: Boolean,
        gainCard: Boolean,
        gainTreasure: Boolean,
        immunity: Boolean,
        attack: {
            curse: Boolean,
            discard: Boolean
        }
    } */
});

module.exports = mongoose.model('Card', mySchema);