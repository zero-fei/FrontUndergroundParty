/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const res = []
  const n = citations.length;
  const m = Math.floor(n / 2)
  const check = (h) => {
    const res1 = citations.filter(item => item >= 3);
    const res2 = citations.filter(item => item < 3);
    if (res1.length < h || res2.length < (n - h)) {
      return false
    }
    return true
  }
  for (let i = 0; i < n; i += 1) {
    if (check(i)) {
      res.push(i)
    }
  }
  return res[res.length - 1]
};