const mongoose = require('mongoose');

// remote db connection settings. For security, connectionString should be in a separate file not committed to git
// var connectionString = "mongodb://<dbuser>:<dbuserpassword>@ds015962.mlab.com:15962/<dbname>";
// mongoose.connect(connectionString);

// local db connection settings 
const ip = process.env.ip || '127.0.0.1';
mongoose.connect('mongodb://' + ip + '/books');

const conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'connection error:'));

const mySchema = mongoose.Schema({
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
    upgrade: Boolean,
    box: String,
    extraSetup: String
});

module.exports = mongoose.model('Card', mySchema);