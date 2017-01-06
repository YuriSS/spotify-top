'use strict'

const Task = require('data.task')
const request = require('request')

// get :: String -> Task Future
const get = url =>
  new Task((rej,res) =>
  request(url, (err, response, body) =>
    err ? rej(err) : res(body)
  ))

module.exports = {get}