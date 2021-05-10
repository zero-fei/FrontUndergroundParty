/*
假设按照升序排序的数组在预先未知的某个点上进行了旋转。
( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
你可以假设数组中不存在重复的元素。
你的算法时间复杂度必须是 O(log n) 级别。
示例 1:
输入: nums = [4,5,6,7,0,1,2], target = 0
输出: 4
示例 2:
输入: nums = [4,5,6,7,0,1,2], target = 3
输出: -1
https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 二分法也适用于局部有序的数组
// 每次二分时总会有一部分的数组是有序的，根据判断target是否在有序的那一部分数组中来确定l,r的边界值
// while(start <= end) 注意二分的终止条件要加上=呀
var search = function(nums, target) {
  if(!Array.isArray(nums)) return -1
  let start = 0, end = nums.length - 1, mid = 0
  while(start <= end){
    mid = start + ((end - start) >> 1)
    console.log(mid, start, end)
    if(nums[mid] === target) {
      return mid
    }
    
    if(nums[start] <= nums[mid]) { 
      if(target >= nums[start] && target < nums[mid]){
        end = mid - 1
      }else {
        start = mid + 1
      }
    }else{
      if(target > nums[mid] && target <= nums[end]) {
        start = mid + 1
      }else {
        end = mid - 1
      }
    }
  }
  return -1
};

const nums = [5,1,3], target = 3
console.log(search(nums, target))