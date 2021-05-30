/**
 * 给你一个有序数组 nums ，请你 原地 删除重复出现的元素，使每个元素 最多出现两次 ，返回删除后数组的新长度。
 *
 * 不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 *
 * 解法： 双指针，移动情况对比26题，添加了一个前序数值的对比，3者相同才后移next指针
 *
 * 提交之后运行时间较长，对比官方题解发现思路一致。纠结下面解法的耗时点。后面发现诧异点在于下面题解会修改nums的长度。注释后发现阶梯时间缩短了20ms
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 2) {
    return nums.length;
  }
  let pre = 1, next = pre + 1
  while (next < nums.length) {
    if (nums[pre] === nums[next] && nums[pre - 1] === nums[pre]) {
      next++;
    } else {
      if (next - pre > 1) {
        nums[pre + 1] = nums[next]
      }
      pre++;
      next++;
    }
  }
  // 这部操作比较耗时，要真正删除原数组需要此步操作，只需要返回删除后的数组长度不需要
  // nums.length = pre + 1;
  return nums.length
};

const test1 = [1,1,1,2,2,3]
const test2 = [0,0,1,1,1,1,2,3,3]
removeDuplicates(test1)
console.log(test1)

removeDuplicates(test2)
console.log(test2)
