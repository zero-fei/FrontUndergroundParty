/**
 * @param {string[]} strs
 * @return {string}
 * 解题思路：全局满足局部一定满足：所以可以通过局部满足推出全局满足
 */
 var longestCommonPrefix = function(strs) {
   let result = ""
   if(!strs.length) return result
   result = strs[0]
  /**
   * 局部满足：假设数组0项即为最长公共前缀
   */
   for (let index = 1; index < strs.length; index++) {
    let index2 = 0
    /**遍历，查找当前最长公共前缀与下一项的最长子前缀 */
     for (index2; index2 < result.length && index2 < strs[index].length; index2++) {
       if(result[index2] !== strs[index][index2]) {
         break
       }
     }
     result = result.slice(0,index2)
    // 此时已经无最长公共前缀，不需要继续遍历，直接resturn
     if(result === "") {
       return result
     }
  }
  return result
};