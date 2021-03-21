/**
 * 给定一个  m x n 的矩阵，如果一个元素为 0 ，则将其所在行和列的所有元素都设为 0 。请使用 原地 算法。
 *
 * 进阶：
 *
 * 一个直观的解决方案是使用   O(mn)  的额外空间，但这并不是一个好的解决方案。
 * 一个简单的改进方案是使用 O(m  +  n) 的额外空间，但这仍然不是最好的解决方案。
 * 你能想出一个仅使用常量空间的解决方案吗？
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let x = new Array(m).fill(false), y = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        x[i] = true;
        y[j] = true
      }
    }
  }
  console.log(x, y);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (x[i] || y[j]) {
        matrix[i][j] = 0;
      }
    }
  }
  // for (let i = 0; i < x.length; i++) {
  //   for (let j = 0; j < n; j++) {
  //     matrix[x[i]][j] = 0;
  //   }
  // }
  // for (let i = 0; i < y.length; i++) {
  //   for (let j = 0; j < m; j++) {
  //     matrix[j][y[i]] = 0;
  //   }
  // }
  return void 0;
};

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
