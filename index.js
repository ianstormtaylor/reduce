
var each = require('each');


/**
 * Reduce an array or object.
 *
 * @param {Array|Object} obj
 * @param {Mixed} memo
 * @param {Function} iterator
 * @return {Mixed}
 */

module.exports = function reduce (obj, memo, iterator) {
  each(obj, function (a, b) {
    memo = iterator.call(null, memo, a, b, obj);
  });
  return memo;
};