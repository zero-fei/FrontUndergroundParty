/** 方法一
 * 时间复杂度：n2
 * 空间复杂度：m + n
 */
const funOne = () => {
  var setZeroes = function (matrix) {
    const m = matrix.length
    if (m <= 0) return matrix
    const n = matrix[0].length
    if (n <= 0) return matrix
    const rows = new Array(m).fill(false)
    const cols = new Array(n).fill(false)
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matrix[i][j] !== 0) continue
        rows[i] = true
        cols[j] = true
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (!rows[i] && !cols[j]) continue
        matrix[i][j] = 0
      }
    }

    return matrix
  };
  setZeroes()
}
