/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  const arr = [0, 1,]
  let index2 = index3 = index5 = 1
  for(let i = 2; i <= n; i++) {
    const num2 = arr[index2] * 2
    const num3 = arr[index3] * 3
    const num5 = arr[index5] * 5
    arr[i] = Math.min(num2, num3, num5)
    if (arr[i] === num2) {
      index2 ++
    } 
    if (arr[i] === num3) {
      index3 ++
    }
    if (arr[i] === num5) {
      index5 ++ 
    }
  }
  console.log(arr)
  return arr[n]
};