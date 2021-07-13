/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const res = []
  const n = citations.length;
  const check = (h) => {
    const res1 = citations.filter(item => item >= h);
    const res2 = citations.filter(item => item < h);
    if (res1.length < h || res2.length < (n - h)) {
      return false
    }
    return true
  }
  for (let i = 1; i <= citations[n - 1]; i += 1) {
    if (check(i)) {
      res.push(i)
    }
  }
  return res[res.length - 1]
};

// 官方 解法
var hIndex = function (citations) {
  let n = citations.length;
  let left = 0, right = n - 1;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (citations[mid] >= n - mid) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return n - left;
};
