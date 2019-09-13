const express = require('express')
const Sse = require('json-sse')
const factory = require('./router')
const stream = new Sse()

const app = express()
const router = factory(stream)
app.use(router)

const port = process.env.PORT || 4000

const onListen = () => {
  console.log('Listening on port:', port)
}

app.listen(port, onListen)