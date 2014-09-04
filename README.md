# express-simulate-latency

[express.js](http://expressjs.com) middleware which simulates network latency. Use when testing local servers to simulate connections to remote servers.

## Installing

With [npm](http://npmjs.org/):

```sh
$ npm install j-/express-simulate-latency
```

## Use

```js
var simulateLatency = require('express-simulate-latency');
// use as middleware for all subsequent handlers...
var smallLag = simulateLatency({ min: 100, max: 500 });
app.use(smallLag);
// ...or use as middleware for a specific route
var bigLag = simulateLatency({ min: 1200, max: 3400 });
var callback = function (req, res, next) { /* callback logic */ }
app.get('/bigquery', bigLag, callback);
```

## Syntax

`simulateLatency(options)`

* `options` - Optional configuration
  * `options.min` - Optional minimum wait time. Will use 0 seconds by default.
  * `options.max` - Optional maximum wait time. Will use the value of `options.min` by default.

## License

[MIT license](LICENSE).