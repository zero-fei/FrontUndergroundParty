/**
 * @param {number} num
 * @return {string}
 */
 const romanMap = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M"
}
//romanMap的key 从小到大的：罗马字符对应的数字排序
const numMap = Object.keys(romanMap).map(Number).reverse()

 var intToRoman = function(num) {
   let result = []
  dfs(num,result)
  return result.join("")
};

function dfs(num,result) {
  //查询有罗马字符的第一个小于等于当前数字的字符
  const temp = numMap.find(item => item <= num)
  result.push(romanMap[temp])
  if(temp === num) {
    return
  } else {
    dfs(num - temp,result)
  }
}

console.log(intToRoman(9))
console.log(intToRoman(3))
console.log(intToRoman(58))