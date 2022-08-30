const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsStats = {};
  let array = domains.map((element) => element.split('.'));

  array.forEach((el) => {
    let dns = '';
    for (let i = el.length - 1; i >= 0; i--) {
      dns += '.' + el[i];
      console.log(dns);
      if (dnsStats[dns]) {
        dnsStats[dns] += 1;
      } else {
        dnsStats[dns] = 1;
      }
    }
  });

  return dnsStats;
}

module.exports = {
  getDNSStats,
};
