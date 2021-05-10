/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/**
 * 结题思路：动态规划‘
 * 先构想使用一维数数组，还是二维数组
 * 这道题适合二维数组，接着就想如何把答案与二维数组的最后一项扯上关系
 */
 var isSubsequence = function(s, t) {
   const s_length = s.length
   const t_length = t.length
   if(t_length < s_length) {
     return false
   }
   let arr = []
   for (let index = 0; index < t_length + 1; index++) {
    arr.push(Array(s_length + 1).fill(0))
  } 
  /* 忽略0行与0列，习惯而已，因为二维数组也刚好比正在的大，故*/ 
  for(let i = 1;i<=t_length;i++) {
    for (let j = 1;j<=s_length;j++) {
      if(t.charAt(i - 1) === s.charAt(j-1)) {
        arr[i][j] = arr[i-1][j-1] + 1
      } else {
        arr[i][j] = arr[i-1][j]
      }
    }
  }
  // 
  if(arr[t_length][s_length] === s_length) {
    return true
  } else {
    return false
  }
};

isSubsequence("abc","ahbgdc"
)