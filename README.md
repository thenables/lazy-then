
# lazy-then

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

A promise implementation that resolves lazily, i.e.
when `.then()` or `.catch()` are executed.
Uses either `bluebird` or the native `Promise` implementation.

## API

### LazyPromise( resolve, reject => )

Same as `Promise( resolve, reject => )`.

### LazyPromise.resolve(val)

Same as `Promise.resolve(val)`.

### LazyPromise.reject(err)

Same as `Promise.reject(err)`.

[npm-image]: https://img.shields.io/npm/v/lazy-then.svg?style=flat-square
[npm-url]: https://npmjs.org/package/lazy-then
[github-tag]: http://img.shields.io/github/tag/thenables/lazy-then.svg?style=flat-square
[github-url]: https://github.com/thenables/lazy-then/tags
[travis-image]: https://img.shields.io/travis/thenables/lazy-then.svg?style=flat-square
[travis-url]: https://travis-ci.org/thenables/lazy-then
[coveralls-image]: https://img.shields.io/coveralls/thenables/lazy-then.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/thenables/lazy-then?branch=master
[david-image]: http://img.shields.io/david/thenables/lazy-then.svg?style=flat-square
[david-url]: https://david-dm.org/thenables/lazy-then
[license-image]: http://img.shields.io/npm/l/lazy-then.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/lazy-then.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/lazy-then
[gittip-image]: https://img.shields.io/gittip/jonathanong.svg?style=flat-square
[gittip-url]: https://www.gittip.com/jonathanong/
