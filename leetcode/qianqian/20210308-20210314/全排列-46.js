/**
 * 46. 全排列(https://leetcode-cn.com/problems/permutations/)
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
   let numsb = []
   for(let i = 0; i<nums.length;i++ ){
     numsb.push(false)
   }
   let res = []
  dfs(nums,numsb,[],res)
   return res
};

function dfs(nums,numsb,temp,result) {
  if(temp.length === nums.length){
    const temp2 = temp.concat([])
    result.push(temp2)
    return result
  }
  for(let i = 0; i<nums.length;i++) {
    const nowNum = nums[i]
    if(!numsb[i]) {
      temp.push(nowNum)
      numsb[i] = true
      dfs(nums,numsb,temp,result)
      temp.pop()
      numsb[i] = false
    }
  }
}

console.log(permute([1,2,3]));