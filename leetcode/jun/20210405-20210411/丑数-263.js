/**
 * 给你一个整数 n ，请你判断 n 是否为 丑数 。如果是，返回 true ；否则，返回 false 。
 *
 * 丑数 就是只包含质因数  2、3 和/或  5  的正整数。
 *
 * 解法：丑数 乘 （2， 3， 5）肯定还是丑数，反之亦然。故采用递归法。
 */

/**
 * @param {number} n
 * @return {boolean}
 */
const uglyBase = [1, 2, 3, 5]
var isUgly = function(n) {
  if (!n) {
    return false
  }
  if (uglyBase.includes(n)) {
    return true
  }
  if (n % 2 === 0) {
    return isUgly(n / 2)
  }
  if (n % 3 === 0) {
    return isUgly(n / 3)
  }
  if (n % 5 === 0) {
    return isUgly(n / 5)
  }
  return false
};

const testList = [6, 8, 14, 1] // true， true， false， true
testList.forEach(item => {
  console.log(isUgly(item))
})
