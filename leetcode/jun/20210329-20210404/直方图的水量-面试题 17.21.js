/**
 * 给定一个直方图(也称柱状图)，假设有人从上面源源不断地倒水，最后直方图能存多少水量?直方图的宽度为 1。
 * const height = [0,1,0,2,1,0,1,3,2,1,2,1] // 6
 * const height1 = [4,2,0,3,2,5] // 9
 * const height2 = [5,5,1,7,1,1,5,2,7,6] // 23
 *
 * 解法： 双指针，可存水量取决于最短的那根柱子
 */


/**
 * 日志输出
 * @param height
 * @param l
 * @param r
 * @param p
 * @param result
 */
var log = function (height, l, r, p,  result) {
  const log = new Array(height.length).fill('-')
  log[l] = '^';
  log[r] = '^';
  log[p] = '#'
  console.log(...height)
  console.log(...log)
  console.log('>>>' + result)
}
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length < 2) {
    return 0
  }
  let l = 0, r = height.length - 1;
  let temp = 0;
  let result = 0;
  let _p;
  while (l < r) {
    if (height[r] > height[l]) { // 右边柱子比左边高
      result += temp;
      temp = 0; // 换统计方向需要清空之前的计算
      if (_p === undefined || height[_p] <= height[l]) {
        _p = l;
      }
      if (height[l + 1] < height[_p]) {
        temp = height[_p] - height[l + 1]
      }
      l++
    } else {
      result += temp;
      temp = 0; // 换统计方向需要清空之前的计算
      if (_p === undefined || height[_p] <= height[r]) {
        _p = r;
      }
      if (height[r - 1] < height[_p]) {
        temp = height[_p] - height[r - 1]
      }
      r--
    }
    log(height, l, r, _p, temp)
  }
  return result;
};
const height = [0,1,0,2,1,0,1,3,2,1,2,1] // 6
const height1 = [4,2,0,3,2,5] // 9
const height2 = [5,5,1,7,1,1,5,2,7,6] // 23
const result = trap(height2)
console.log(result)
