/**
 * 颠倒给定的 32 位无符号整数的二进制位。
 *
 * 示例 1：
 * 输入: 00000010100101000001111010011100
 * 输出: 00111001011110000010100101000000
 * 解释: 输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，
 * 因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。
 *
 * 解题思路：
 * 解法一：用取余法获取二进制数组，采用数组存储模式来颠倒。返回颠倒后的二进制数组求十进制整数
 * 解法二：用api(toString(radix))去进行二进制，采用数组reverse方法颠倒，再用api(parseInt(str, radix))进行还原
 */

/**
 * 解法一
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
  let bitsList = new Array(32).fill(0);
  let cur = n;
  let i = 0;
  while(cur > 1) {
    bitsList[i] = cur % 2;
    cur = Math.floor(cur / 2);
    i++;
  }
  bitsList[i] = cur;
  let len = bitsList.length;
  return bitsList.reduce(((previousValue, currentValue, currentIndex) => {
    return previousValue + currentValue * Math.pow(2, len - currentIndex - 1);
  }), 0)
};

/**
 * 解法二
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits2 = function(n) {
  let bitsList = (Array(32).join("0")+(43261596).toString(2)).slice(-32).split('');
  console.log(bitsList);
  return parseInt(bitsList.reduceRight(((previousValue, currentValue) => {
    console.log(previousValue + currentValue);
    return previousValue + currentValue;
  }), ''), 2)
};
