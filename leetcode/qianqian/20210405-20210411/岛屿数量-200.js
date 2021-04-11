
/**
 * 岛屿与数量（https://leetcode-cn.com/problems/number-of-islands/）
 * 思路：
 * 1、一个节点可以从左、从右、从上、从下
 * 2、每一个陆地只能作为一个岛屿，所以一个位置的“1”只能用一次，标识被用过的话，将其变为“0”
 * 3、截止条件，遍历完，节点的序号小于0，当前节点为海洋“0”
 * @param {shil} grid 
 * @returns 
 */
 var numIslands = function(grid) {
  let count = 0
   if(grid.length === 0 || grid[0].length === 0) {
     return count
   }
   const rowLength = grid.length
   const colLength = grid[0].length
   for (let i = 0; i < rowLength; i++) {
     for (let j = 0; j < colLength; j++) {
       if(grid[i][j] === "1") {
         dfs(grid,i,j,rowLength,colLength)
         count ++
       }
     }    
   }

   return count
};

function dfs(grid,i,j,rowLength,colLength) {
  if(i<0 || j< 0 || i > rowLength-1 || j > colLength-1 || grid[i][j] === "0") {
    return
  }
  grid[i][j] = "0"
  dfs(grid,i+ 1,j,rowLength,colLength)
  dfs(grid,i-1,j,rowLength,colLength)
  dfs(grid,i,j+1,rowLength,colLength)
  dfs(grid,i,j-1,rowLength,colLength)
}