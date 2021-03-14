/*
* 46. 全排列(https://leetcode-cn.com/problems/permutations-ii/)
* 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
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
  if(!haveDuplicateArrar(result,temp2)) {
    result.push(temp2)
  }
   return
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

/**
 * 是否含有相同的组合
 */
 function haveDuplicateArrar(targetArr, simpleArr) {
  for (let i = 0; i < targetArr.length; i++) {
    if (
      simpleArr.length === targetArr[i].length &&
      simpleArr.toString() === targetArr[i].toString()
    ) {
      return true
    }
  }
  return false
}
console.log(permute([1,-1,1,2,-1,2,2,-1]));