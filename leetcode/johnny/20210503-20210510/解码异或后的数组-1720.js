/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
  const arr = []
  arr.push(first)
  for(let i = 0; i<encoded.length; i++) {
    const k = encoded[i]
    const length = arr.length
    const temp = arr[length-1]
    arr.push(temp ^ k)
  }
  return arr
};