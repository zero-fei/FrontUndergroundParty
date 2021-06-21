/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
 var game = function(guess, answer) {
   let result = 0
   guess.forEach((item,index) => {
     if(item === answer[index]) {
       result ++
     }
   });
   return result
};