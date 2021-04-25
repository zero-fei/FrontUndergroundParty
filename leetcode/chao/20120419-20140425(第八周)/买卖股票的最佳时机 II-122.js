/**
 * 定一个数组 prices ，其中 prices[i] 是一支给定股票第 i 天的价格。

  设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票）。

  注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。
 */

/**
 * 二维的dp方程
 * 第i天的最大利润
 * dp[i][0] = max{ dp[i-1][0], dp[i-1][1] + prices[i] }   这里不是dp[i-1]+(prices[i] - prices[i-1]),不能以两天的利润差来看待,这里其实指的是 前一天没买的情况下,今天买入后的利润
 * dp[i][1] = max{ dp[i-1][0] - prices[i], dp[i-1] }
 * 
 * dp迭代的例子
 *           初始值  [1, 2, 3, 4, 5]
 * dp[i][0]    0     0   1  2  3  4
 * dp[i][1]   -1     -1 -1 -1 -1 -1
 * 
 */

/**
 * @param {number[]} prices
 * @return {number}
*/
var maxProfit = function(prices) {
  const size = prices.length
  let dp0 = 0, dp1 = -prices[0]
  for(let i = 1; i < size; i++) {
    const new_dp0 = Math.max(dp0, dp1 + prices[i])
    const new_dp1 = Math.max(dp1, dp0 - prices[i])
    // 需要用临时变量存储 
    dp0 = new_dp0 
    dp1 = new_dp1
  }
  return dp0
};
console.log(maxProfit([0,1,2,3,4,5]))

/**
 * 贪心
 */
var maxProfit2 = function(prices) {
  const size = prices.length
  let profit = 0
  for(let i = 1; i<size; i++) {
    const diff = prices[i]-prices[i-1]
    if(diff > 0) {
      profit += diff
    }
  }
  return profit
};
console.log(maxProfit2([0,1,2,3,4,5]))