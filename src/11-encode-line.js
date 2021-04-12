/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    if (str[i] === str[i + 1] || str[i] === str[i - 1]) {
      for (let k = 0; k < str.length; k++) {
        if (str[i] === str[k]) {
          count += 1;
        }
      }
      if (str[i] === str[i - 1] && str[i] !== str[i + 1]) {
        res += `${count}${str[i]}`;
      }
    } else {
      res += str[i];
    }
  }
  return res;
}

module.exports = encodeLine;
