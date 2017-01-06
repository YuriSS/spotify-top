'use strict'

// artists :: [items]
// https://api.spotify.com/v1/search?q=tania%20bowra&type=artist

const Task = require('data.task')
const {http} = require('../support/')

const findArtist = name =>
  http.get(`https://api.spotify.com/v1/search?q=${name}&type=artist`)


module.exports = {findArtist}