const functions = require('firebase-functions')
const express = require('express')

const app = express()
const cors = require('cors')({
  origin: '*',
})

app.use('*', cors)

app.get('/', (request, response) => {
  response.send('Hello from Express on Firebase!')
})

exports.api = functions.https.onRequest(app)

exports.api = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})
