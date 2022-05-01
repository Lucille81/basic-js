const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let index = arr.length - 1;
  arr.findIndex(function(el,i,arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > arr[i - 1]){
        index = i - 1;
        return i;
      }
    }
  });
  arr.splice(index, 1);
  return +arr.join('');
}

module.exports = {
  deleteDigit
};
