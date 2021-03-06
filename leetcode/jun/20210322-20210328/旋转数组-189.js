/**
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 *
 * 进阶：
 *
 * 尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。
 * 你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？
 *
 * 输入: nums = [1,2,3,4,5,6,7], k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 *
 * 方法一： 取余后数组逐个移动 pop, unshift
 * 方法二： splice
 * 方法三： 原数组内部交换
 *
 * 总结：方法一比较好理解，内存相对较少，耗时指数级增长
 *      方法三内存跟方法一消耗差不多，耗时相对稳定，操作时间在数量大的时候优势比较明显
 *      方法二时间消耗最少，但是空间使用也是最多，在k为50w的时候有内存报错，故在数量级少的时候比较合适
 */


/**
 * 方法一  0.139ms
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 执行用时: 128 ms
 * 内存消耗: 38.5 MB
 */
var rotate = function(nums, k) {
  let right = k % nums.length
  while (right) {
    const last = nums.pop()
    nums.unshift(last)
    right--
  }
};

/**
 * 方法二
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 执行用时：80 ms, 在所有 JavaScript 提交中击败了98.96%的用户
 * 内存消耗：40.1 MB, 在所有 JavaScript 提交中击败了12.13%的用户
 */
var rotate2 = function(nums, k) {
  k = k % nums.length
  console.log(k, nums.length)
  const rightList = nums.splice(nums.length - k, k)
  nums.splice(0, 0, ...rightList)
};

const gcd = (x, y) => y ? gcd(y, x % y) : x;
/**
 * 方法三 0.306ms
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 *
 * 执行用时：100 ms, 在所有 JavaScript 提交中击败了59.52%的用户
 * 内存消耗：38.7 MB, 在所有 JavaScript 提交中击败了61.37%的用户
 */
var rotate3 = function(nums, k) {
  const len = nums.length
  let right = k % len
  let counter = gcd(right, len);
  for (let start = 0; start < counter; ++start) {
    let current = start;
    let prev = nums[start];
    do {
      const next = (current + right) % len;
      const temp = nums[next];
      nums[next] = prev;
      prev = temp;
      current = next;
    } while (start !== current);
  }
};

const k = 500000
var test0 = new Array(Math.floor(Math.random() * 1000000)).fill(Math.floor(Math.random() * 100))
var test1 = new Array(Math.floor(Math.random() * 1000000)).fill(Math.floor(Math.random() * 100))
var test2 = new Array(Math.floor(Math.random() * 1000000)).fill(Math.floor(Math.random() * 100))
// console.time('counter1')
// rotate(test0, k)
// rotate(test1, k)
// rotate(test2, k)
// console.timeEnd('counter1')

// console.time('counter2')
// rotate2(test0, k)
// rotate2(test1, k)
// rotate2(test2, k)
// console.timeEnd('counter2')

console.time('counter3')
rotate3(test0, k)
rotate3(test1, k)
rotate3(test2, k)
console.timeEnd('counter3')

