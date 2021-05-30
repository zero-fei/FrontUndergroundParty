/**
 * 动态规划：
 * 题目描述很坑，真坑
 * @param {number[]} cost
 * @return {number}
 */
 var minCostClimbingStairs = function(cost) {
   const costLength = cost.length
   let limitCostArray = new Array(costLength).fill(0)
   limitCostArray[0] = cost[0]
   limitCostArray[1] = cost[1]
   for (let index = 2; index < costLength; index++) {
    let stepOne = limitCostArray[index - 1] + cost[index]
    let stepTwo = limitCostArray[index - 2] + cost[index]
    limitCostArray[index] = Math.min(stepOne,stepTwo)
   }
   return limitCostArray[costLength - 1]
};