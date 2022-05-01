const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options.addition === null) options.addition = String(options.addition);

  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator === undefined) options.additionSeparator = '|';
  if (options.addition === undefined) options.addition = '';

  let addArr = new Array(options.additionRepeatTimes);
  addArr.fill(options.addition);
  
  let addStr = addArr.join(options.additionSeparator);

  str = String(str);
  let resStr = str.concat(addStr);
  
  if (options.repeatTimes > 1) {
    let resArr = new Array(options.repeatTimes);
    resArr.fill(resStr);

    resStr = resArr.join(options.separator)
  }
  
  return resStr;
}

module.exports = {
  repeater
};
