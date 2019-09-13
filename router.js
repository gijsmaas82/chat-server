const express = require('express')

const { Router } = express

const messages = ['Hello', 'Goodbye']

function factory (stream) {
  const router = new Router()

  function onStream (req, res) {
    const data = JSON.stringify(messages)
    console.log('data:', data)

    stream.updateInit(data)
    stream.init(req, res)
  }

  router.get('/stream', onStream)

  return router
}

module.exports = factory