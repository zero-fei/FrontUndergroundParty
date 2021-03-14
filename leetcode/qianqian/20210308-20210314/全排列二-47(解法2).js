/*
* 全排列 II-47(https://leetcode-cn.com/problems/permutations-ii/)
* 给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。
*/
/*
* @param {number[]} nums
* @return {number[][]}
*/
// 全排列 II-47
var permuteUnique = function(nums) {
  //  获取数组每一项出现的次数
  const valueOccObj = getArrayValueOcc(nums)
  const valueArr = Object.keys(valueOccObj) // key是字符串
  const valueOccArr = Object.values(valueOccObj)
  const size = nums.length
  let res = []
  dfs(size,valueArr,valueOccArr,[],res)
  return res
};

function dfs (size,valueArr,valueOccArr,temp,res) {
  // 循环截止条件：当组合的数组长度等于nums长度
  if(temp.length === size) {
    res.push(temp.concat([]))
    return
  }
  for(let i= 0;i<valueArr.length;i++) {
    // key是字符串
    const nowValue = Number(valueArr[i])
    // value可使用的次数大于0
    if(valueOccArr[i] > 0) {
      temp.push(nowValue)
      -- valueOccArr[i]
      dfs(size,valueArr,valueOccArr,temp,res)
      temp.pop()
      ++ valueOccArr[i]
    }
  }
}

// 获取数组元素出现次数
 function getArrayValueOcc (arr) {
   let objArr = arr.reduce((obj,name) => {
     console.log(obj,name);
     obj[name] = obj[name] ? ++obj[name] : 1
     return obj
   }, {})
   return objArr
 }

 console.log(permuteUnique([1,-1,1,2,-1,2,2,-1]));