/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const hash = {}
  let sum = 0
  for (let i = 0; i < answers.length; i++) {
    const num = answers[i]
    if (hash[num]) {
      if ((hash[num] + 1) === num+1) {
        sum += (hash[num] +1) 
        delete hash[num]
      } else {
        hash[num] ++
      }
      
    } else {
      if (num === 0) {
        sum +=  1
      } else {
        hash[num] = 1
      }
      
    }
  }
  for(key in hash) {
    sum += Number(key) + 1
  }
  return sum
};