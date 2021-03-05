// 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
/**
 * 组合之和
 * 链接：https://leetcode-cn.com/problems/combination-sum
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  // 循环终止条件
  let result = []
  dfs(candidates, target, [], result)
  return result
}

function dfs(candidates, target, temp, result) {
  // 循环截止条件
  if (getSum(temp) >= target) {
    if (getSum(temp) === target) {
      // 符合条件的数据排个序，方便后面去掉相同组合
      const ret = temp.concat([]).sort()
      // 是否含有相同的组合
      if (!haveDuplicateArrar(result, ret)) {
        result.push(ret)
      }
    }
    return
  }
  for (let i = 0; i < candidates.length; i++) {
    temp.push(candidates[i])
    dfs(candidates, target, temp, result)
    temp.pop()
  }
}
/**
 * 获取数组之和
 */
function getSum(arr) {
  let ret = 0
  for (let i = 0; i < arr.length; i++) {
    ret += arr[i]
  }
  return ret
}
/**
 * 是否含有相同的组合
 */
function haveDuplicateArrar(targetArr, simpleArr) {
  for (let i = 0; i < targetArr.length; i++) {
    if (
      simpleArr.length === targetArr[i].length &&
      simpleArr.toString() === targetArr[i].toString()
    ) {
      return true
    }
  }
  return false
}

let candidates = [2, 3, 6, 7],
  target = 7
console.log(combinationSum(candidates, target))

//
