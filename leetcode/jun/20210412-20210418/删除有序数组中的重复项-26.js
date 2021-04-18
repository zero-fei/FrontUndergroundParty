/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
 * 解法： 双指针，因为是有序数组，所以可以采用前后对比方法。优化的点是：前后指针的值不一样且指针不相邻的时候才需要复制
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) {
    return nums.length
  }
  if (nums.length === 2) {
    if (nums[0] === nums[1]) {
      nums.length = 1;
    }
    return nums.length
  }
  let pre = 0, next = pre + 1
  while (next <= nums.length - 1) {
    if (nums[pre] === nums[next]) {
      next++;
    } else {
      if (next - pre > 1) {
        nums[pre + 1] = nums[next]
      }
      pre++;
      next++;
    }
  }
  nums.length = pre + 1;
  return nums.length
};

const test1 = [1,1,2]
const test2 = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(test1)
console.log(test1)

removeDuplicates(test2)
console.log(test2)
