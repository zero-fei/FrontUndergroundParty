/**
 * 给定一个非空的整数数组，返回其中出现频率前 k 高的元素。
 *
 * 示例 1:
 *
 * 输入: nums = [1,1,1,2,2,3], k = 2
 * 输出: [1,2]
 * 示例 2:
 *
 * 输入: nums = [1], k = 1
 * 输出: [1]
 *
 * 提示：
 *
 * 你可以假设给定的 k 总是合理的，且 1 ≤ k ≤ 数组中不相同的元素的个数。
 * 你的算法的时间复杂度必须优于 O(n log n) , n 是数组的大小。
 * 题目数据保证答案唯一，换句话说，数组中前 k 个高频元素的集合是唯一的。
 * 你可以按任意顺序返回答案。
 *
 * 方法一： 桶排序
 * 方法二： 快排
 *
 */

function jsQuickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const pivotIndex = Math.floor(array.length / 2);
  const pivot = array.splice(pivotIndex, 1)[0];  //从数组中取出我们的"基准"元素
  const left = [], right = [];
  array.forEach(item => {
    if (item < pivot) {  //left 存放比 pivot 小的元素
      left.push(item);
    } else {  //right 存放大于或等于 pivot 的元素
      right.push(item);
    }
  });
  //至此，我们将数组分成了left和right两个部分
  return jsQuickSort(left).concat(pivot, jsQuickSort(right));  //分而治之
}

// 桶排序
let bucketSort = (map, k) => {
  let arr = [], res = []
  map.forEach((value, key) => {
    // 利用映射关系（出现频率作为下标）将数据分配到各个桶中
    if(!arr[value]) {
      arr[value] = [key]
    } else {
      arr[value].push(key)
    }
  })
  // 倒序遍历获取出现频率最大的前k个数
  for(let i = arr.length - 1;i >= 0 && res.length < k;i--){
    if(arr[i]) {
      res.push(...arr[i])
    }
  }
  return res
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let map = new Map();
  let temp = [];
  for (let i of nums) {
    if (map.has(i)) {
      map.set(i, map.get(i) + 1);
    } else {
      map.set(i, 1);
    }
  }
  // 如果元素数量小于等于 k
  if(map.size <= k) {
    return [...map.keys()]
  }
  return bucketSort(map, k);
};

var topKFrequent2 = function(nums, k) {
  let sortNums = jsQuickSort(nums);
  let temp = [];
  sortNums.reduce((pre, cur, index) => {
    console.log(pre, cur, index)
    pre++;
    if (cur !== sortNums[index + 1]) {
      temp.push([cur, pre]);
      pre = 0;
    }
    return pre;
  }, 0)

  console.log(temp);
  temp.sort((a, b) => b[1] - a[1]);
  console.log(temp);
  return temp.slice(0, k).map(item => item[0])
};
console.log(topKFrequent2([4,1,-1,2,-1,2,3], 2));
