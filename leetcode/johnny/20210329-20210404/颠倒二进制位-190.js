/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  const stack = []
  let sum = 0
  let size = 1
  let num = 32
  function dg(m) {
    if (num === 0) return 
    num --
    stack.push(m & 1)
    dg(m >>> 1)
    if (stack.length) {
      const temp =  stack.pop()
      sum += size * temp
      size *= 2
    }
    
  }
  dg(n)
  return sum
};