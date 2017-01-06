'use strict'

const Task = require('data.task')
const Either = require('data.either')

// eitherToTask :: Either -> Task
const eitherToTask = either =>
    either.fold(Task.rejected, Task.of)

// head :: [x] -> x
const head = Either.try(xs => xs[0])

// tail :: [x] -> [y]
const tail = Either.try(xs => xs.slice(1))

// trace :: String -> a -> a
const trace = tag => a => {
    console.log(`${tag}: `, a)
    return a
}

// log :: String -> a -> a
const log = tag => a => {
    console.log(`${tag}`)
    return a
}

module.exports = {eitherToTask, head, tail, trace, log}