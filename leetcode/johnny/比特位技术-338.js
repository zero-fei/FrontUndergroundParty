/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let tag = 2;
  let lastTAG = 0;
  const ret = [];
  let target = 0;
  if (num >= 1) {
    ret.unshift(1);
  } 
  if (num >= 0) {
    ret.unshift(0);
  }
  for (let i = 2 ; i <= num; i++) {
    if (i === tag) {
      lastTAG = tag;
      tag = tag * 2
      target = 1
    } else {
      target = 1  + ret[i-lastTAG];
    }
    ret.push(target)
  }
  return ret
};
console.log(countBits(5));