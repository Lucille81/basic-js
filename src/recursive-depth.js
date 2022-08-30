const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  // constructor() {
  //   this.count = 1;
  // }

  calculateDepth(arr) {
    let count = 1;
    if (arr.some((el) => Array.isArray(el))) {
      arr = arr.flat();

      count = this.calculateDepth(arr) + 1;
    }

    return count;
  }
}

module.exports = {
  DepthCalculator,
};
