'use strict'

const Task = require('data.task')
const Either = require('data.either')
const request = require('request')

const {eitherToTask, trace, log} = require('./utils')

// parse :: Either Error JSON
const parse = Either.try(JSON.parse)

// get :: String -> Task Future
const get = url =>
  new Task((rej,res) =>
  request(url, (err, response, body) =>
    err ? rej(err) : res(body)
  ))
  .map(log(`Requesting [${url}]`))
  .map(parse)
  .chain(eitherToTask)

module.exports = {get}