const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// set up and connect to mongodb database
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/test');
//message schema
const MessageSchema = mongoose.Schema({
    content: String,
    date: Date,
});
//message model
const Message = mongoose.model('Message',MessageSchema);

// setup app
const app = express();
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  // Send JSON
  res.send({ status: 'on' });
});

//return list of all messages as JSON
app.get('/messages', (req,res) => {
    Message.find().lean(true).exec( (err,messages) => {
        console.log("=========================");
        console.log("err = ", err);
        console.log("messages = ",messages);
        res.send({ messages });
    });
});

//check for non-empty string
function isNonEmptyString(input) {
    return (input instanceof String || typeof input === 'string') && input !== "";
}

//save received message asynchronously into mongoDB
app.post('/messages', (req, res) => {
    const received_message = req.body.message;
    console.log("------------------------");
    console.log("post request received");
    console.log("received_message = ", received_message);
    if (isNonEmptyString(received_message)) {
        const message = new Message();
        message.content = received_message;
        message.date = new Date();
        console.log("received_message = ",received_message);
        message.save(()=> {
            res.send(req.body);
            console.log("message saved!!");
        });
    }
});

module.exports = app;
