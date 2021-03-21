/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  if (!n) return []
  const matrix = new Array(n).fill(0).map(item => new Array(n).fill(0))
  let num = 1
  function getOrderArr(startW, StartH, endW, endH) {
    
    if (startW >= endW || StartH >= endH || endW < 0 || endH < 0 ) return 
    for(let i = startW; i < endW; i ++) {
      matrix[StartH][i] = num ++
    }
    for(let j = StartH + 1; j < endH; j++) {
      matrix[j][endW-1] =  num ++
    }
    for(let i = endW-2; i >= startW && (StartH !== (endH-1)); i--) {
      matrix[endH-1][i] =  num ++
    }
    for(let j = endH-2; (j > StartH) && (startW !== (endW-1)); j -- ) {
      matrix[j][startW] =  num ++
    }
    getOrderArr(startW + 1, StartH +1 , endW - 1, endH - 1 )
  }
  getOrderArr(0, 0, n, n)
  return matrix
};