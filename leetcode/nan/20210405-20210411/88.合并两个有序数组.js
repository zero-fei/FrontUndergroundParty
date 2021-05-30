/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let left = m - 1
  let right = n - 1
  for (let i = m + n - 1; i >= 0; i--) {
    let cur
    if (left === -1) {
      cur = nums2[right--]
    } else if (right === -1) {
      cur = nums1[left--]
    } else if (nums1[left] <= nums2[right]) {
      cur = nums2[right--]
    } else {
      cur = nums1[left--]
    }
    nums1[i] = cur
  }
};