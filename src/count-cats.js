module.exports = function countCats(matrix) {
  let result = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let p = 0; p < matrix[i].length; p++) {
      if (matrix[i][p] == '^^') {
        result = result + 1;
      }
    }
  }
  return result;
};
