/**
 * 复原IP地址-98(https://leetcode-cn.com/problems/restore-ip-addresses/)
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function (s) {
  let result = []
  function dfs (str,i,res) {
    if(i === str.length-1 || res.length === 4 ){
      if(i === str.length-1  && res.length === 4){
        result.push(res.join('.'))
      }
      return
    }
    for (let j = 1; j < 4; j++) {
      const c = str.substr(i+1,j)
      if(validate(c)){
        res.push(c)
        dfs(str,i+j,res)
        res.pop(c)
      }
    }
  }
  dfs(s,-1,[])
  return result
}

function validate(str) {
  if(str == "0")  return true
  if(str.startsWith("0")) return false
  return parseInt(str) <= 255
}

console.log(restoreIpAddresses("19216801"));