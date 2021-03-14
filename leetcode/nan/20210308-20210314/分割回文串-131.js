/** 动态规划+回溯法 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const len = s.length
  const res = []
  const ans = []
  const f = new Array(len).fill(0).map(() => new Array(len).fill(true))
  for (let i = len - 1; i >= 0; i--) {
    for (let j = i + 1; j < len; j++) {
      f[i][j] = s[i] === s[j] && f[i + 1][j - 1]
    }
  }

  const dfs = (i) => {
    if (i === len) {
      res.push(ans.slice())
      return
    }

    for (let j = i; j < len; j++) {
      if (f[i][j]) {
        ans.push(s.slice(i, j + 1))
        dfs(j + 1)
        ans.pop()
      }
    }
  }
  dfs(0)
  return res
};
