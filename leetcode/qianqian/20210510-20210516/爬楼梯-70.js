/**
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 * 每次只能走一步或者两步
 * 
 * 解法：动态规划
 * 到达第n阶：往前倒着的话，
 * 1：最少走一步 + f(n-1)
 * 2：最少走两步的话  + f(n-2)
 * 故：fn  = f(n-1) + f(n-2)
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
   let stepArr = [0,1,2]
   for (let index = 3; index <= n; index++) {
     stepArr[index] = stepArr[index -1] + stepArr[index -2]
   }
   return stepArr[n]
};