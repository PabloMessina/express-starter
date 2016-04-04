const express = require('express')
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

/* Datastore */
const datastore = []

app.get('/', (req, res) => {
  // Send JSON
  res.send({ status: 'on' })
});

app.get('/messages', (req, res) => {
  res.send({ messages: datastore })
})

app.post('/messages', (req, res) => {
  const message = req.body.message
  datastore.push(message)
  res.send(message)
})

module.exports = app
