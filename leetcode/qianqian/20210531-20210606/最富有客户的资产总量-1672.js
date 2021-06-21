/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
   let maximum_Wealth = 0
   let i_length = accounts.length
   let j_length = accounts[0].length
   for (let i = 0; i < i_length; i++) {
     let sum_wealth = 0
     for (let j = 0; j < j_length; j++) {
       sum_wealth += accounts[i][j]
     }
     maximum_Wealth = Math.max(maximum_Wealth,sum_wealth)
   }
   return maximum_Wealth
};
