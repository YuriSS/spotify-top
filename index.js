'use strict'

const Task = require('data.task')
const {List} = require('immutable-ext')
const Spotify = require('./models/')
const {trace, Max} = require('./support/')

// argv :: Task a
const argv = new Task((rej,res) => res(process.argv))

// names :: Task [names]
const names = argv.map(arg => arg.slice(2))

// getPopularity :: String -> Task Future popularity
const getPopularity = name =>
    Spotify.findArtist(name)
    .map(artist => artist.id)
    .chain(Spotify.findArtistTopTrack)

const getMostPopular = popularity =>
    popularity
    .foldMap(Max, Max.empty())

const main = names =>
    List(names)
    .traverse(Task.of, getPopularity)
    .map(getMostPopular)
    .map(max => max.x)
    .map(max => 'Most popular '.concat(max))

names.chain(main).fork(console.error, console.log)