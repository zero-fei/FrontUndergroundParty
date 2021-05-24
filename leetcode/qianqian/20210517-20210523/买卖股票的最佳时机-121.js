/**
 * (https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/)
 * 思路： 动态规划，使用一维数组，寻找递推关系
 * 记录当前最低价格
 * 使用resultArr来表示当前天的卖出赚的最多钱
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
   if(!prices || !prices.length) {
     return 0
   }
   let resultArr = [0]
   let minPrices = prices[0]
   for (let index = 1; index < prices.length; index++) {
     minPrices = Math.min(minPrices,prices[index])
     resultArr[index] = Math.max(prices[index] - minPrices, resultArr[index - 1])
   }
   return resultArr[prices.length - 1]
};

console.log(maxProfit([7,1,5,3,6,4]))