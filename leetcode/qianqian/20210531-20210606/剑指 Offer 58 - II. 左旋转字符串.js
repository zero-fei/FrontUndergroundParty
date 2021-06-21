/**
 * 剑指 Offer 58 - II. 左旋转字符串(https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/)
 */
/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
   let arr = s.split("")
   return arr.splice(0,0,...arr.splice(n)).join("")
};