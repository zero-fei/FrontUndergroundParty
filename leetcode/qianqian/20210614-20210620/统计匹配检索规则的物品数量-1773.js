/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
  const ruleKeyEnum = {
    "type": 0,
    "color": 1,
    "name": 2
  }
  const ruleIndex = ruleKeyEnum[ruleKey]
  let result = 0
  items.forEach(element => {
    if(element[ruleIndex] === ruleValue) {
      result ++
    }
  });
  return result
};