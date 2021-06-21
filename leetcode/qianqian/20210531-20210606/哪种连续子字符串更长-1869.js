/**
 * 哪种连续子字符串更长-1869.js（https://leetcode-cn.com/problems/longer-contiguous-segments-of-ones-than-zeros/）
 * 注意判断的时候是字符串“1”与“0”。不是数
 */
/**
 * @param {string} s
 * @return {boolean}
 */
 var checkZeroOnes = function(s) {
   /**s[i] 不是 '0' 就是 '1' */
   if(s.indexOf(1) === -1) return false
   if(s.indexOf(0) === -1) return true
  //  记录0 的最长连续子序列
   let one_MaxLength = 0
  //  记录1的最长连续子序列
   let zero_MaxLength = 0
   for (let index = 0; index < s.length; index++) {
     let maxLength = 1
     let stepIndex = 0
     while(s[stepIndex + index] === s[index]) {
      maxLength++;
      stepIndex++
     }
     if(s[index] === "0") {
      zero_MaxLength = Math.max(zero_MaxLength,maxLength)
     } else {
      one_MaxLength = Math.max(one_MaxLength,maxLength)
     }
     /**已经循环过的，不在循环，减少循环次数 */
     index = index + stepIndex -1
   }
   return one_MaxLength > zero_MaxLength
};
