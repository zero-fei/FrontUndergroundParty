
function longestPalindrome(str) {
  const len = str.length

  const dp = new Array(len).fill(0).map(() => new Array(len).fill(false))
  
  
  if(str.length <= 1) {
    return str
  }
  for(let i = 0; i<len;i++) {
    dp[i][i] = true
  }

  let maxLen = 1, begin = 0


  // 枚举子串长度，根据子串长度和i确定右边界j
  for(let l = 2; l <= len; l++) {
    for(let i = 0; i <= len-l; i++) {
      const j = i + l - 1 // 右边界，细节-1
      if(str[j] !== str[i]) {
        dp[i][j] = false
      }else {

       if(j-i < 3) {
        dp[i][j] = true
       }else{
        dp[i][j] = dp[i+1][j-1]
       } 

       if(j-i+1>maxLen && dp[i][j]) {
        begin = i
        maxLen = j-i+1
      }

      }
    }
  }

  // console.log(dp)
  // console.log(maxLen, begin)

  return str.substr(begin, maxLen)


}


const str = 'abadc'
console.log(longestPalindrome(str))


// 解法2： 中心扩展算法
function longestPalindrome2(str) {

}