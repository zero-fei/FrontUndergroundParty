/**
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 *
 * 整数除法仅保留整数部分。
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  s = s.trim();
  const nums = [];
  const len = s.length;
  let ops = '+';
  let num = 0;
  for (let i = 0; i < len; i++) {
    if (!isNaN(Number(s[i])) && s[i] !== ' ') {
      num = num * 10 + Number(s[i]);
    }
    if (isNaN(Number(s[i])) || i === len - 1) {
      switch (ops) {
        case "+":
          nums.push(num);
          break;
        case "-":
          nums.push(-num);
          break;
        case "*":
          nums.push(nums.pop() * num);
          break;
        default:
          nums.push(parseInt(String(nums.pop() / num)))
      }
      ops = s[i];
      num = 0;
    }
  }
  console.log(nums)
  let ans = 0;
  while (nums.length) {
    ans += nums.pop();
  }
  return ans
};

const s1 = "3+2*2"
console.log(calculate(s1))
const s2 = " 3/2 "
console.log(calculate(s2))
const s3 = " 3+5 / 2 "
console.log(calculate(s3))
const s4 = "42"
console.log(calculate(s4))