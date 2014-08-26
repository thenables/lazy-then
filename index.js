
var Promise = require('native-or-bluebird')
var memo = require('memorizer')
var assert = require('assert')

module.exports = LazyPromise

function LazyPromise(fn) {
  if (!(this instanceof LazyPromise)) return new LazyPromise(fn)

  assert.equal('function', typeof fn)
  this._fn = fn
}

memo(LazyPromise.prototype, '_promise', function () {
  if (this._fn) return new Promise(this._fn)
  if (this._val) return Promise.resolve(this._val)
  if ('_err' in this) return Promise.reject(this._err)
})

LazyPromise.prototype.then = function (resolve, reject) {
  return this._promise.then(resolve, reject)
}

LazyPromise.prototype.catch = function (reject) {
  return this._promise.catch(reject)
}

LazyPromise.resolve = function LazyPromise$resolve(val) {
  var promise = Object.create(LazyPromise.prototype)
  promise._val = val
  return promise
}

LazyPromise.reject = function LazyPromise$reject(err) {
  var promise = Object.create(LazyPromise.prototype)
  promise._err = err
  return promise
}
