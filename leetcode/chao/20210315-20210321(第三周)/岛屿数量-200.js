/**
 * 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
  岛屿总是被水包围，并且每座岛屿只能由水平方向或竖直方向上相邻的陆地连接形成。
  此外，你可以假设该网格的四条边均被水包围。
 * 
 输入:
  [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0']
  ]
  输出: 1
 */

 /**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslandsDfs = function(grid) {
  const row = grid.length , col = grid[0].length
  // const island = Array.from(grid)
  let nums = 0
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(grid[i][j] === '1'){
        ++nums
        dfs(grid, i, j)
      }
    }
  }
  return nums

  function dfs(grid, r, c) {
    const row = grid.length , col = grid[0].length
    grid[r][c] = '0'
    if(r+1 < row && grid[r+1][c] === '1') dfs(grid, r+1, c)
    if(r-1 >= 0 && grid[r-1][c] === '1') dfs(grid, r-1, c)
    if(c+1 < col && grid[r][c+1] === '1') dfs(grid, r, c+1)
    if(c-1 >= 0 && grid[r][c-1] === '1') dfs(grid, r, c-1)
  }
};
var numIslandsBfs = function(grid) {
  const row = grid.length , col = grid[0].length
  let nums = 0
  for(let i = 0; i < row; i++){
    for(let j = 0; j < col; j++){
      if(grid[i][j] === '1'){
        ++nums
        const queue = []
        queue.push([i,j])
        grid[i][j] = '0'
        while(queue.length){
          const row = grid.length , col = grid[0].length
          const current = queue.shift()
          let r = current[0], c = current[1]
          if(r+1 < row && grid[r+1][c] === '1') {queue.push([r+1,c]);grid[r+1][c] = '0'}
          if(r-1 >= 0 && grid[r-1][c] === '1') {queue.push([r-1,c]);grid[r-1][c] = '0'}
          if(c+1 < col && grid[r][c+1] === '1') {queue.push([r,c+1]);grid[r][c+1] = '0'}
          if(c-1 >= 0 && grid[r][c-1] === '1') {queue.push([r,c-1]);grid[r][c-1] = '0'}
        }
      }
    }
  }
  return nums
}


const island = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]
// console.log(numIslandsDfs(island))
console.log(numIslandsBfs(island))