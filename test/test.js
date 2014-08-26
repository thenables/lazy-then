
var Promise = require('native-or-bluebird')
var assert = require('assert')

var LazyPromise = require('..')

describe('LazyPromise()', function () {
  it('.then()', function () {
    var called
    var promise = LazyPromise(function (resolve) {
      called = true
      setTimeout(resolve, 10)
    })

    assert(!called)

    return promise.then(function () {
      assert(called)
    })
  })

  it('.catch()', function () {
    var called
    var err = new Error('boom')
    var promise = LazyPromise(function (resolve, reject) {
      called = true
      setTimeout(function () {
        reject(err)
      }, 10)
    })

    assert(!called)

    return promise.catch(function (err) {
      assert.equal('boom', err.message)
    })
  })
})

it('LazyPromise.resolve()', function () {
  return LazyPromise.resolve(1).then(function (val) {
    assert.equal(1, val)
  })
})

it('LazyPromise.reject()', function () {
  var err = new Error('boom')
  return LazyPromise.reject(err).then(function () {
    throw new Error('wtf')
  }).catch(function (err) {
    assert.equal('boom', err.message)
  })
})
