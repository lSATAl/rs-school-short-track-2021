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
  const splitN = String(n).split('');
  const min = String(Math.min(...splitN));
  const spliceItemN = splitN.indexOf(min);
  splitN.splice(spliceItemN, 1);
  return parseFloat(splitN.join(''));
}

module.exports = deleteDigit;
