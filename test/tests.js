describe('reduce', function () {

var assert = require('assert')
  , reduce = require('reduce');

it('should reduce an array', function () {
  var arr = [1, 2, 3];
  var ret = reduce(arr, 0, function (current, val, i) {
    return current + val;
  });
  assert(6 === ret);
});

it('should reduce an object', function () {
  var obj = { a: 1, b: 2, c: 3 };
  var ret = reduce(obj, 0, function (current, key, val) {
    return current + val;
  });
  assert(6 === ret);
});

});