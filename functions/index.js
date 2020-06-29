const functions = require('firebase-functions')
const express = require('express')

const app = express()
const router = express.Router()

router.post('/register', (req, res) => {
  res.send('helrlo')
})
router.post('/verify', (req, res) => {
  res.send('helvlo')
})

app.use('/api', router)

exports.fns = functions.https.onRequest(app)
