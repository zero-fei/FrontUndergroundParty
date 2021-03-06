/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  const res = []
  const n = citations.length;
  const check = (h) => {
    console.info(h, 'h')
    const res1 = citations.filter(item => item >= h);
    const res2 = citations.filter(item => item < h);
    if (res1.length < h || res2.length < (n - h)) {
      return false
    }
    return true
  }
  for (let i = 0; i <= citations[n - 1]; i += 1) {
    if (check(i)) {
      res.push(i)
    }
  }
  console.info(res, 'res')
  return res[res.length - 1]
};

console.info(hIndex([1, 1]), '====')