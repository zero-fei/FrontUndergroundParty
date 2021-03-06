/**
 * @param {number[]} nums
 */


var NumArray = function(nums) {
  this.tempArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      this.tempArr[i] = nums[i];
    } else {
      this.tempArr[i] = this.tempArr[i-1] + nums[i];
    }
  }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
  const deleteNum = i === 0 ? 0 : this.tempArr[i-1]
  return this.tempArr[j] - deleteNum
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */