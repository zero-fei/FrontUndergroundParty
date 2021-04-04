/**
 * 简单的问题往往隐藏了重要信息，比如这里的，打乱，什么才叫乱？

  其中有两个要素

  随机的结果要能够覆盖所有的情况，（譬如 n个数，最后的结果有 n! 情况，结果所有顺序必须都能够出现）
  所有出现的结果 概率 相等
 *  
 */

const getRandomIndex = function(start, end) {
  return Math.floor(start + Math.random() * (end - start + 1))
}

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.origin = [...nums]
}
/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return [...this.origin]
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  let copy = [...this.origin]
  let len = copy.length
  while(len--) {
    console.log(copy)
    let swapIndex = getRandomIndex(0, len)
    console.log("swapIndex", swapIndex)
    [copy[len], copy[swapIndex] ] = [copy[swapIndex], copy[len]]
  }
  return copy
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

var obj = new Solution([1, 2, 3])
console.log(obj.shuffle())