/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let length = nums1.length - 1 
  let i = m - 1, j = n -1
  while(i >= 0 && j >= 0) {
    const item1 = nums1[i]
    const item2 = nums2[j]
    if (item1 < item2) {
      nums1[length] = item2
      j --
    } else if (item1 >= item2) {
      nums1[length] = item1
      i --
    }
    length -- 
  }
  while(i >= 0) {
    const item1 = nums1[i]
    nums1[length] = item1
    i --
    length--
  }
  while(j >= 0) {
    const item2 = nums2[j]
    nums1[length] = item2
    j--
    length--
  }
  return nums1
};