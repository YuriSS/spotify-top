'use strict'

// artists :: [items]
// https://api.spotify.com/v1/search?q=tania%20bowra&type=artist

// top :: [tracks]
// https://api.spotify.com/v1/artists/{id}/top-tracks?country=BR

const Task = require('data.task')
const {http, eitherToTask, trace, head, Max} = require('../support/')

const findArtist = name =>
  http.get(`https://api.spotify.com/v1/search?q=${name}&type=artist`)
  .map(result => result.artists.items)
  .map(head)
  .chain(eitherToTask)

const findArtistTopTrack = id =>
    http.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=BR`)
    .map(result => result.tracks)
    .map(tracks => tracks.map(track => Max(track.popularity)))
    .map(xs => xs.reduce((acc, curr) => acc.concat(curr), Max.empty()))
    .map(max => max.x)

module.exports = {findArtist, findArtistTopTrack}