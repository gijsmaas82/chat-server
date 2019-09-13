const express = require('express')
const Sse = require('json-sse')
const factory = require('./router')
const bodyParser = require('body-parser')
const stream = new Sse()

const app = express()
const jsonParser = bodyParser.json()
app.use(jsonParser)
const router = factory(stream)
app.use(router)

const port = process.env.PORT || 4000

const onListen = () => {
  console.log('Listening on port:', port)
}

app.listen(port, onListen)