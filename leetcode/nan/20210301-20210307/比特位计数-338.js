var countBits = function (num) {
    const result = new Array(num + 1).fill(0)
    for (let i = 1; i < num + 1; i++) {
      result[i] = result[i & (i - 1)] + 1
    }
    return result
};