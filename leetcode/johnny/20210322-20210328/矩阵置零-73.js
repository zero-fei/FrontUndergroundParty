/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  const m = matrix.length
  if (!m) return 
  const n = matrix[0].length
  if (!m) return 
  const mGroup = new Set()
  const nGroup = new Set()
  for (let i = 0; i<m; i++) {
    const matrixRow = matrix[i]
    for (let j = 0; j<n; j++) {
      if (matrixRow[j] === 0) {
        mGroup.add(i)
        nGroup.add(j)
      }
    }
  }

  for (let i = 0; i<m; i++) {
    for (let j = 0; j<n; j++) {
      if (mGroup.has(i) || nGroup.has(j)) {
        matrix[i][j] = 0
      } 
    }
  }

  console.log(matrix)

};
