/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const splitS1 = s1.split('');
  const splitS2 = s2.split('');
  let num = '';

  for (let i = 0; i < splitS1.length; i++) {
    num = splitS2.indexOf(splitS1[i]);
    if (num !== -1) {
      res += 1;
      splitS2.splice(num, 1);
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
