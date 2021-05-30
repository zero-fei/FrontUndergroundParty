/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const numHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  const numArray = []
  const array = s.split("")
  while(array.length) {
    const s = array.shift()
    let num = numHash[s]
    if (s === 'I') {
      const next = array[0]
      if (next === 'V' || next === 'X') {
        num *= -1
      }
    }
    if (s === 'X') {
      const next = array[0]
      if (next === 'L' || next === 'C') {
        num *= -1
      }
    }
    if (s === 'C') {
      const next = array[0]
      if (next === 'D' || next === 'M') {
        num *= -1
      }
    }
    
    numArray.push(num)
  }
  return numArray.reduce(function(a, b) {
    return a + b
  })
};