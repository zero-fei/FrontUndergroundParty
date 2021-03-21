/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const m = matrix.length
  const ret = []
  if (!m) return ret
  const n = matrix[0].length
  if (!n) return ret
  function getOrderArr(startW, StartH, endW, endH) {
    
    if (startW >= endW || StartH >= endH || endW < 0 || endH < 0 ) return 
    for(let i = startW; i < endW; i ++) {
      ret.push(matrix[StartH][i])
    }
    for(let j = StartH + 1; j < endH; j++) {
      ret.push(matrix[j][endW-1])
    }
    for(let i = endW-2; i >= startW && (StartH !== (endH-1)); i--) {
      ret.push(matrix[endH-1][i])
    }
    for(let j = endH-2; (j > StartH) && (startW !== (endW-1)); j -- ) {
      ret.push(matrix[j][startW])
    }
    getOrderArr(startW + 1, StartH +1 , endW - 1, endH - 1 )
  }
  getOrderArr(0, 0, n, m)

  return ret
};