/**
 * 树
 */
const isValid = (i, n, arr) => {
  const cur = arr[i]
  if (cur === '#' || i >= n) return i
  const temp = isValid(i + 1, n, arr)
  return isValid(temp + 1, n, arr)
}

var isValidSerialization = function (preorder) {
  const arr = preorder.split(',')
  const n = arr.length
  return isValid(0, n, arr) + 1 === n
};