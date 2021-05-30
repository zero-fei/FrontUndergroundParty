/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
  const numLength = nums.length
  this.sumArray = new Array(numLength).fill(0)
  for (let index = 0; index < numLength; index++) {
    /**边界处理，从1开始记录下标为0的 */
   this.sumArray[index+1] = this.sumArray[index] + nums[index]
  }
};

/** 
* @param {number} left 
* @param {number} rightA
* @return {number}
*/
NumArray.prototype.sumRange = function(left, right) {
 return this.sumArray[right + 1] - this.sumArray[left]
};

/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/