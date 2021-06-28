/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const romanMap = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }
    let result = 0
    let index = 0
    while (index < s.length) {
      const case1 = s[index] === "I" && s[index+1] === "V"
      const case2 = s[index] === "I" && s[index+1] === "X"
      const case3 = s[index] === "X" && s[index+1] === "L"
      const case4 = s[index] === "X" && s[index+1] === "C"
      const case5 = s[index] === "C" && s[index+1] === "D"
      const case6 = s[index] === "C" && s[index+1] === "M"
      if(case1 || case2 || case3 || case4 || case5 || case6) {
        result += romanMap[s[index+1]] - romanMap[s[index]] 
        index = index + 2
      } else {
        result += romanMap[s[index]]
        ++ index
      }
    }
    return result
};

console.log(romanToInt("IV"))