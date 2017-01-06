'use strict'

const Task = require('data.task')
const {findArtist} = require('./models/')

// argv :: Task a
const argv = new Task((rej,res) => res(process.argv))

// names :: Task [name]
const names = argv.map(arg => arg.slice(2))

// main :: [names] -> Task Future artists
const getArtists = ([name1, name2]) =>
  Task.of(art1 => art2 => ({first: art1, second: art2}))
  .ap(findArtist(name1))
  .ap(findArtist(name1))

const main = getArtists

names.chain(main).fork(console.error, console.log)