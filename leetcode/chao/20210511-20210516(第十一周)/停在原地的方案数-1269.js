/**
 * 有一个长度为 arrLen 的数组，开始有一个指针在索引 0 处。

每一步操作中，你可以将指针向左或向右移动 1 步，或者停在原地（指针不能被移动到数组范围外）。

给你两个整数 steps 和 arrLen ，请你计算并返回：在恰好执行 steps 次操作以后，指针仍然指向索引 0 处的方案数。

由于答案可能会很大，请返回方案数 模 10^9 + 7 后的结果。

 */

/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */

// dp[steps][index] = dp[steps-1][index-1] + dp[steps-1][index] + dp[steps-1][index+1]  
/**
 * 边界条件：
 * 1. steps = 0时，dp[steps-1][index-1] = 0
 * 2. steps = min(steps, arrLen)时，dp[step-1][index + 1] = 0
 * 
 */
var numWays = function(steps, arrLen) {
  const modulo = 1000000007
  const maxIndex = Math.min(steps, arrLen-1)
  let dp = new Array(maxIndex+1).fill(0)
  dp[0] = 1
  for(let step = 1; step <= steps; step++) {
    const dpNext = Array.from(dp)
    for(let index = 0; index < maxIndex+1; index++) {
      if(index-1>= 0) {
        dpNext[index] = (dpNext[index] + dp[index-1]) % modulo
      }
      if(index+1 <= maxIndex) {
        dpNext[index] = (dpNext[index] + dp[index+1]) % modulo
      }
    }
    console.log(step, dpNext)
    dp = dpNext
  }
  return dp[0]
};

console.log(numWays(4,2))