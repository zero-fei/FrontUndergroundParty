/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  const length = employees.length
  const elist = new Array(length).fill(null)
  const queue = []
  let num = 0
  for (let i = 0; i < length; i++) {
    const em = employees[i]
    const cid = em.id
    elist[cid] = em
    if (cid === id) {
      queue.push(em)
    }
  }
  while(queue.length) {
    const em = queue.shift()
    num += em.importance
    for(let i = 0 ; i < em.subordinates.length; i++ ) {
      const cid = em.subordinates[i]
      queue.push(elist[cid])
    }
  }
  return num

};