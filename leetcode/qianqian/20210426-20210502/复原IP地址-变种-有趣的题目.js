  /**
   * 复原ip地址变种：只需要给出合法的ip地址数量
   * 用98题的深度优先算法可以得出结果，但是重复的计算较多，该题目可以使用动态规划
   * arr[i][j]：字符串前j个数字组成i个复合0-255的数的组合个数
   * @param {*} str 
   * @returns 
   */
  function dp (str) {
    /**创建二维数组arr[4][len],用0初始化位置 */
    let arr = []
    const len = str.length 
    for (let index = 0; index < 5; index++) {
      arr.push(Array(len + 1).fill(0))
    }

    for (let i = 0; i < 5; i++) {
      for (let j = i; j < len + 1; j++) {
        /**递推起始值 */
        if(i === 0) {
          if(j === 0) {
            arr[i][j] = 1
          }
          continue
        }
        /**符合0-255，最多三位数 */
        for (let x = 1; x <= 3; x++) {
          /**获取当前的值 */
          // substring(start,end)
          if(j >= x && validate(str.substring(j-x,j))) {
            // 如果当前元素符合，就加其前面的符合ip的组合数量相加，具体可以画一个二维数组感知
            arr[i][j] += arr[i-1][j-x]
          }
        }
      }
    }
    return arr[4][len]
  }
  
  function validate(str) {
    if(str == "0")  return true
    if(str.startsWith("0")) return false
    return parseInt(str) <= 255
  }

  dp("19216801")