/**
 * @param {string} s
 * @return {number}
 */
const isInvalid = n => n < 1 || n > 26 || Number.isNaN(n)
const numDecodings = function (s) {
  const len = s.length
  let prev = 1
  let tPrev = 0
  for (let i = 0; i < len; i++) {
    let temp = 0
    if (!isInvalid(+s[i])) {
      temp = prev
    }
    if (i > 0 && s[i - 1] !== '0' && !isInvalid(s.slice(i - 1, i + 1))) {
      temp += tPrev
    }
    tPrev = prev
    prev = temp
  }
  return prev
};