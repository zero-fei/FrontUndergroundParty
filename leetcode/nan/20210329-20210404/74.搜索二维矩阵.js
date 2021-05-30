// 方法1
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  if (!m) return false
  const n = matrix[0].length
  let row = m - 1
  let col = 0
  while (row >= 0 && col < n) {
    const num = matrix[row][col]
    if (num === target) {
      return true
    } else if (num > target) {
      row -= 1
    } else {
      col += 1
    }
  }
  return false
};

// 方法2
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  if (!m) return false
  const n = matrix[0].length
  const size = m * n
  let left = 0
  let right = size - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const { row, col } = getPosition(middle, n)
    const num = matrix[row][col]
    if (num === target) {
      return true
    } else if (num > target) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return false
};