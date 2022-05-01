const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error ('\'arr\' parameter must be an instance of the Array!');
  let arr2 = arr.slice();
  
  if (arr2[0] == '--discard-prev' || 
      arr2[0] == '--double-prev') {
    arr2.splice(arr2[0], 1);
      }  

  if (arr2[arr2.length - 1] == '--discard-next' ||
      arr2[arr2.length - 1] == '--double-next') {
    arr2.splice(arr2[arr2.length - 2], 1);
      }

  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] == '--discard-next' && arr2[i + 2] == '--double-prev') {
      arr2.splice(i, 3);
    }
    if (arr2[i] == '--discard-next' && arr2[i + 2] == '--discard-prev') {
      arr2.splice(i, 3);
    }
    
    if (arr2[i] == '--discard-next') {
      arr2.splice(i, 2);
    }
    if (arr2[i] == '--discard-prev') {
      arr2.splice(i - 1, 2);
    }
    if (arr2[i] == '--double-next') {
      let a = arr2[i + 1];
      arr2.splice(i, 1, a);
    }
    if (arr2[i] == '--double-prev') {
      let b = arr2[i - 1];
      arr2.splice(i, 1, b);
    }
  }
  
  return arr2;
}

module.exports = {
  transform
};
