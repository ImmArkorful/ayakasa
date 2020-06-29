const functions = require('firebase-functions')
const express = require('express')

const app = express()
const router = express.Router()

const cors = require('cors')({ origin: true })

app.use(cors)

router.get('/one', (req, res) => {
  res.send('one')
})
router.get('/two', (req, res) => {
  res.send('two')
})

app.use('/api', router)

exports.api = functions.https.onRequest(app)
