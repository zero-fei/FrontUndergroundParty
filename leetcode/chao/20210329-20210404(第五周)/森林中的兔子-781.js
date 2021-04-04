/**
 * 森林中，每个兔子都有颜色。其中一些兔子（可能是全部）告诉
 * 你还有多少其他的兔子和自己有相同的颜色。我们将这些回答
 * 放在 answers 数组里。返回森林中兔子的最少数量。
 * 
 */

/**
 * @param {number[]} answers
 * @return {number}
 */
var numRabbits = function(answers) {
  const count = new Map();
    for (const y of answers) {
        count.set(y, (count.get(y) || 0) + 1);
    }
    let ans = 0;
    for (const [y, x] of count.entries()) {
        ans += Math.floor((x + y) / (y + 1)) * (y + 1);
    }
    return ans;
};