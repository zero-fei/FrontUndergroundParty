/**
 * 给你一个字符串表达式 s ，请你实现一个基本计算器来计算并返回它的值。
 *
 * 提示：
 * · 1 <= s.length <= 3 * 105
 * · s 由数字、'+'、'-'、'('、')'、和 ' ' 组成
 * · s 表示一个有效的表达式
 */
const pushVal = (group, nums, num) => {
  if (group.length) {
    group[group.length - 1].push(num)
  } else {
    nums.push(num);
  }
}

const dueGroup = (nums, num) => {
  if (1 / nums[nums.length - 1] === -Infinity) {
    nums[nums.length - 1] = (-num)
  } else {
    nums[nums.length - 1] = num
  }
}
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  const group = [];
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
          pushVal(group, nums, num)
          break;
        case "-":
          pushVal(group, nums, -num)
          break;
        case "*":
          pushVal(group, nums, (group.length ? group[group.length - 1].pop() : nums.pop()) * num)
          break;
        case '(':
          group.push([num])
          break;
        case ')':
          let _tempGroup = group.pop()
          let _temp = 0
          while (_tempGroup.length) {
            _temp += _tempGroup.pop()
          }
          if (group.length) {
            dueGroup(group[group.length - 1], _temp)
          } else {
            dueGroup(nums, _temp)
          }
          break;
        default:
          pushVal(group, nums, parseInt(String((group.length ? group[group.length - 1].pop() : nums.pop()) / num)))
      }
      ops = s[i];
      num = 0;
    }
  }
  // console.log(nums, group)
  while (group.length) {
    dueGroup(nums, group.pop().reduce((pre, cur) => {
      return pre + cur
    }, 0))
  }
  let ans = 0;
  while (nums.length) {
    ans += nums.pop();
  }
  return ans
};

const test1 = '1 + 1'
console.log(calculate(test1))

const test2 = ' 2-1 + 2 '
console.log(calculate(test2))

const test3 = '(1+(4+5+2)-3)+(6+8)'
console.log(calculate(test3))

const test4 = "- (3 + (4 + 5))"
console.log(calculate(test4))