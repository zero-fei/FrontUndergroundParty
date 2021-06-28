/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false
  }
  if (x === 0) {
    return true
  }
  /**某位是0的需要单独处理如：2020 */
  if (x % 10 === 0 && x / 10 !== 0) {
    return false
  }
  /**
   * reversalNum反转数字： 1221 反转为 12 与21
   */
  let reversalNum = 0
  while (x > reversalNum) {
    reversalNum = reversalNum * 10 + (x % 10)
    x = Math.floor(x / 10)
  }
  /**
   * 如果x的长度是偶数的话 ：x === reversalNum  1221
   * 如果x的长度是奇数的话 ：X === Math.floor(reversalNum/10) 12321 x=12 reversalNum 123
   * */
  return x === reversalNum || x === Math.floor(reversalNum / 10)
}

isPalindrome(12321)
isPalindrome(2020)
