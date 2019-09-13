const express = require('express')

const { Router } = express

const messages = ['Hello', 'Goodbye']

function factory (stream) {
  const router = new Router()

  function onStream (req, res) {
    const data = JSON.stringify(messages)
    console.log('data:', data)

    stream.updateInit(data)
    return stream.init(req, res)
  }

  router.get('/stream', onStream)

function onMessage (req, res) {
  const { text } = req.body
  messages.push(text)
  const data = JSON.stringify(messages)
  stream.send(data)
  return res.send(text)
}

  router.post('/message', onMessage)

  return router
}

module.exports = factory