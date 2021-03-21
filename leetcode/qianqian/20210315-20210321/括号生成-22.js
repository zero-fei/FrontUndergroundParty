// 22. 括号生成（https://leetcode-cn.com/problems/generate-parentheses/）
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let a = []
  let b = []
  for (let i = 0; i < n; i++) {
    a.push('(')
    b.push(')')
  }
  let result = []
  dfs(a, b, n, [], result)
  return result
}
function dfs(a, b, n, temp, result) {
  // 循环截止条件
  if (temp.length === 2 * n) {
    const temp2 = temp.concat()
    result.push(temp2.join(''))
    return
  }
  // 左括号的选择不受限制
  if (a.length) {
    a.pop()
    temp.push('(')
    dfs(a, b, n, temp, result)
    a.push('(')
    temp.pop()
  }
  // 右括号的选择：结果中左括号的数量大于右括号
  if (b.length && a.length < b.length) {
    b.pop()
    temp.push(')')
    dfs(a, b, n, temp, result)
    b.push(')')
    temp.pop()
  }
}
generateParenthesis(3)
