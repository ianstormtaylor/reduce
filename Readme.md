# reduce

  Reduce an object or array.

## Installation

    $ component install ianstormtaylor/reduce

## Example

Arrays:

```js
var reduce = require('reduce');

reduce([1, 2, 3], 0, function (curr, val, i) {
  return curr + val;
});

// 6
```

Objects:

```js
var reduce = require('reduce');

reduce({ a: 1, b: 2, c: 3 }, 0, function (curr, key, val) {
  return curr + val;
});

// 6
```

## API

### reduce(obj, memo, iterator)
  Reduce the `obj` using an `iterator` and starting with the `memo`.

## License

  MIT
