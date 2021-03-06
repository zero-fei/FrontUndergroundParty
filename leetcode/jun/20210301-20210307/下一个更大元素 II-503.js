/**
 * 给定一个循环数组（最后一个元素的下一个元素是数组的第一个元素），输出每个元素的下一个更大元素。数字 x 的下一个更大的元素是按数组遍历顺序，这个数字之后的第一个比它更大的数，这意味着你应该循环地搜索它的下一个更大的数。如果不存在，则输出 -1。
 * 链接：https://leetcode-cn.com/problems/next-greater-element-ii
 *
 * 思路：
 * 解法一：双层遍历，第一层遍历取出当前需要对比的元素，第二层遍历获取第一个比当前元素大的值。关键点：循环数组的生成，没有比当前元素大时的处理。时间复杂度 O(n²)
 * 解法二：牺牲空间换时间：单向栈处理。连续递减的元素下标入栈，当前值比栈顶下标对应元素大的出栈，并更新对应下标的结果值。时间复杂度为O(n)
 */

/**
 * 解法一
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
  let result = [];
  let len = nums.length;
  let findArr = [...nums];
  for (let i = 0; i < len; i++) {
    let cur = findArr.shift();
    for (let j = 0; j < len - 1; j++) {
      if (cur < findArr[j]) {
        result[i] = findArr[j];
        break;
      }
    }
    findArr.push(cur);
    if (result[i] === undefined) {
      result[i] = -1;
    }
  }
  return result;
};

/**
 * 解法二
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements2 = function(nums) {
  let len = nums.length;
  let result = new Array(len).fill(-1);
  let stack = [];
  for (let i = 0; i < nums.length * 2 - 1; i++) {
    while (stack.length && nums[stack[stack.length - 1]] < nums[i % len]) {
      let index = stack.pop();
      result[index] = nums[i % len];
    }
    stack.push(i % len);
  }
  return result;
};
