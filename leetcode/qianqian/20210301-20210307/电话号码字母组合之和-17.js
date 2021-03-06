

  /**
 * @param {string} digits
 * @return {string[]}
 */
   var letterCombinations = function(digits) {
    let result = []
    dfs(digits,0,[],result)
    return result 
  };
  // 2-9每个按键对应的字符，0与1不存在字符
  const codeMap = [
    [],
    [],
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['j','k','l'],
    ['m','n','o'],
    ['p','q','r','s'],
    ['t','u','v'],
    ['w','x','y','z']]
  
  function dfs(digits,index,temp,result) {
    // 循环结束
    if(index >= digits.length ){
      // []数组情况如输入“”
      if (temp.length) {
        result.push(temp.join(''))
      }
      return
    }
    const nowLetterArr = codeMap[Number(digits[index])]
  
    for (let i = 0; i < nowLetterArr.length; i++) {
      temp.push(nowLetterArr[i])
      dfs(digits,index+1,temp,result)
      temp.pop()
    }
  }
  
  console.log(letterCombinations('23'));