/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = []
  const numsLength = nums.length
  if (numsLength < 3 || !nums) {
    return result
  }
  /**s升序排序 */
  nums.sort((a, b) => a - b)
  for (let index = 0; index < numsLength; index++) {
    let LIndex = index + 1
    let RIndex = numsLength - 1
    if (nums[index] > 0) {
      // 由于已经是升序排序，所以如果当前的值已经大于0即可结束循环
      break
    }
    // *** 去除重复的起点
    if(index > 0 && nums[index] === nums[index -1]) {
      continue
    }
    while (LIndex < RIndex) {
      const sum = nums[index] + nums[LIndex] + nums[RIndex]
      if (sum === 0) {
        result.push([nums[index], nums[LIndex], nums[RIndex]])
        // 去重
        // *** 左侧去重
        while(LIndex < RIndex && nums[LIndex] === nums[LIndex + 1]) {
         LIndex ++ 
        }
        // ***右侧去重
        while(LIndex < RIndex &&nums[RIndex] === nums[RIndex - 1]) {
          RIndex -- 
        }
        LIndex++
        RIndex--
      } else if (sum < 0) {
        /**左指针向右边便移动 */
        LIndex++
      } else {
        RIndex--
      }
    }
  }
  return result
}
