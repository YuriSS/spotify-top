'use strict'

const {get} = require('./http')
const {eitherToTask, head, tail, trace, log} = require('./utils')
const {Sum, Product, Max, Min, Any, All, Pair, Fn} = require('./monoid')

module.exports = {
  http: {get},
  eitherToTask,
  head,
  tail,
  trace,
  log,
  Sum,
  Product,
  Max,
  Min,
  Any,
  All,
  Pair,
  Fn
}