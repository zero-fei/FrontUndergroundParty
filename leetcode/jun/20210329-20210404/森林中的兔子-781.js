/**
 * 森林中，每个兔子都有颜色。其中一些兔子（可能是全部）告诉你还有多少其他的兔子和自己有相同的颜色。我们将这些回答放在 answers 数组里。
 * 返回森林中兔子的最少数量。
 *
 * 解法：回答相同的兔子说明颜色一样，采用map存储兔子的回答并记录一只，当出现重复回答说明可能是相同颜色兔子，重复数量减一。
 * 当重复数量减为0时说明有两种不一样的颜色兔子数量相同，更新map重复开始新一轮计数
 */

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  let map = {};
  let result = 0;
  for (let i = 0; i < answers.length; i++) {
    const num = answers[i]
    if (!map[num]) {
      map[num] = num
      result += 1
    } else if (map[num]) {
      map[num] = map[num] - 1
      result++
    }
    console.log(map, result)
  }
  for (let i in map) {
    if (map[i]) {
      result += map[i]
    }
  }
  return result
};

const test1 = [1, 1, 2]
const test2 = [10 ,10, 10]
const test3 = []
const test4 = [1, 0, 1, 0, 0]
const test5 = [2,1,2,2,2,2,2,2,1,1]
console.log(numRabbits(test5))
