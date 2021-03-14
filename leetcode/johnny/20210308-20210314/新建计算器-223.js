/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const stack = []
  function getStackNum() {
    let lastN = 0
    let num = 0
    let size = 1
    while (stack.length && stack[stack.length - 1] !== '(') {
      const w = stack.pop()
      if (w === '+') {
        size = 1
        num += lastN
        lastN = 0
      } else if (w === '-') {
        num -= lastN
        size = 1
        lastN = 0
      } else {
        // num += lastN
        lastN = Number(w) * size + lastN
        size *= 10
      }
    }
    num += lastN
    if (stack.length && stack[stack.length - 1] === '(') { 
      stack.pop()
    }
    return num
  }
  for (let i=0; i<s.length; i++) {
    const w = s[i]
    if (w === '(') {
      stack.push(w)
    } else if (w === ')') {
      const n = getStackNum()
      stack.push(n)
    } else if (w === ' ') {
      continue
    } else {
      stack.push(w)
    }
  }
  const res = getStackNum()
  return res
};