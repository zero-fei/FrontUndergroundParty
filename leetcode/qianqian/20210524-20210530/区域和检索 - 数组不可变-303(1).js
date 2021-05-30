/**
 * 动态规划
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
   this.sumArray = []
   this.sumArray[0] = nums[0]
   for (let index = 1; index < nums.length; index++) {
    this.sumArray[index] = this.sumArray[index - 1] + nums[index]
   }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  /**起点是0，边界处理 */
  if(left <= 0) {
    return this.sumArray[right]
  }
  return this.sumArray[right] - this.sumArray[left - 1]
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */