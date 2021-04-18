/**
 * @param {number[]} nums
 * @return {number}
 */
const robChild = (nums) => {
  const res = []
  let max = 0
  nums.forEach((n, i) => {
    if (i === 0) {
      res.push(n)
      max = Math.max(n, max)
    } else {
      const m1 = i >= 2 ? n + res[i - 2] : n
      const m2 = i >= 3 ? n + res[i - 3] : 0
      const mMax = Math.max(m1, m2)
      res.push(mMax)
      max = Math.max(mMax, max)
    }
  }, 0)
  return max
}

var rob = function (nums) {
  const res = []
  const len = nums.length
  if (len < 2) return nums[0]
  return Math.max(robChild(nums.slice(0, len - 1)), robChild(nums.slice(1)))
};