/**
 * @param {string} digits
 * @return {string[]}
 */
const map = {
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}
var letterCombinations = function (digits) {
  const res = []
  const dl = digits.length
  const dfs = (index, paths) => {
    const letters = map[digits[index]]
    if (index === dl) return ''

    const prev = paths[paths.length - 1] || ''
    for (let i = 0; i < letters.length; i++) {
      const cur = letters[i]
      if (index === dl - 1) {
        res.push(prev + cur)
      } else {
        paths.push(prev + cur)
        dfs(index + 1, paths)
      }
    }
  }
  dfs(0, [])
  return res
};