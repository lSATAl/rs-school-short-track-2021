/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  let res2 = [];
  let count = 0;
  for (let i = 0; i < matrix.length; i++) {
    res2 = [];
    for (let k = 0; k < matrix[0].length; k++) {
      count = 0;
      if (i > 0 && matrix[i - 1][k] === true) {
        count += 1;
      }
      if (i < (matrix.length - 1) && matrix[i + 1][k] === true) {
        count += 1;
      }
      if (k > 0 && matrix[i][k - 1] === true) {
        count += 1;
      }
      if (k < (matrix.length - 1) && matrix[i][k + 1] === true) {
        count += 1;
      }
      if (i > 0 && k > 0 && matrix[i - 1][k - 1] === true) {
        count += 1;
      }
      if (i < (matrix.length - 1) && k > 0 && matrix[i + 1][k - 1] === true) {
        count += 1;
      }
      if (i > 0 && k < (matrix.length - 1) && matrix[i - 1][k + 1] === true) {
        count += 1;
      }
      if (i < (matrix.length - 1) && k < (matrix.length - 1) && matrix[i + 1][k + 1] === true) {
        count += 1;
      }
      res2.push(count);
      count = 0;
    }
    res.push(res2);
  }
  return res;
}

module.exports = minesweeper;
