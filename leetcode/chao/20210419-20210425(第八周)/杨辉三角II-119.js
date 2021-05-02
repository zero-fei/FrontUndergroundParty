
/**
 * 给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow = function(rowIndex) {
    let pre = [], cur = [];
    for (let i = 0; i <= rowIndex; ++i) {
        cur = new Array(i + 1).fill(0);
        cur[0] = cur[i] =1;
        for (let j = 1; j < i; ++j) {
            cur[j] = pre[j - 1] + pre[j];
        }
        pre = cur;
    }
    return pre;
};

console.log(getRow(3))