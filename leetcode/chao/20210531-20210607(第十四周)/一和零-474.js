/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// dp[k][i][j] = max(dp[k-1][i][j], dp[k-1][i - cnt[k][0]][j - cnt[k][1]+1] + 1)

const getNumOf01 = function(str) {
  return str.split('').reduce((prev, curr) => {
    let [zeros, ones] = prev
    curr === '0' ? zeros++ : ones++
    return [zeros, ones]
  }, [0,0])
}

var findMaxForm = function(strs, m, n) {
  
  const cnt = []
  for(let i = 0; i < strs.length; i++) {
    cnt[i] = getNumOf01(strs[i])
  }
  const dp = new Array(strs.length+1).fill(0).map(() => new Array(m+1).fill(0).map(() => new Array(n+1).fill(0)))
  for(let k = 1; k <= strs.length; k++) {
    console.log(k)
    for(let i = 0; i <= m; i++) { // m和n 的循环截至条件需要=
      for(let j = 0; j <= n; j++) {
        const noselect = dp[k-1][i][j]
        let select = 0
        if(k>1 && m - cnt[k-1][0]>=0 && n - cnt[k-1][1]>=0) {
          select = dp[k-1][m - cnt[k-1][0]][n - cnt[k-1][1]]+1
        }else {
          select = m >= cnt[0][0] && n >= cnt[0][1] ? 1 : 0
        }
        
        dp[k][i][j] = Math.max(noselect, select)
      }
    }
  }

  console.log(dp)
  
  return dp[strs.length][m][n]
};

console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5,3))