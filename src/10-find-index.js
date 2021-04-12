/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  let pos = -1;

  while (array[pos] !== value && start <= end) {
    const midle = Math.floor((start + end) / 2);
    if (array[midle] === value) {
      pos = midle;
    } else if (array[midle] > value) {
      end = midle - 1;
    } else {
      start = midle + 1;
    }
  }
  return pos;
}

module.exports = findIndex;
