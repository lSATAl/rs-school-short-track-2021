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
function getDNSStats(dom) {
  let arr = [];
  const arr1 = [];
  let str;
  const newSet = {};
  for (let i = 0; i < dom.length; i++) {
    arr = dom[i].split('.');
    str = '';
    for (let k = arr.length - 1; k >= 0; k--) {
      str += `.${arr[k]}`;
      arr1.push(str);
    }
  }
  for (let i = 0; i < arr1.length; i++) {
    newSet[arr1[i]] = arr1.filter((item) => item === arr1[i]).length;
  }
  return newSet;
}

module.exports = getDNSStats;
