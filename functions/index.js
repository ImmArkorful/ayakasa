const functions = require('firebase-functions')
const express = require('express')
const cors = require('cors')({ origin: true })

const app = express()
const router = express.Router()

app.use(cors)

router.get('/', (req, res) => {
  res.send('none')
})

router.get('/one', (req, res) => {
  res.send('one')
})

router.get('/two', (req, res) => {
  res.send('two')
})

app.use('/api', router)

exports.api = functions.https.onRequest(app)
