/**
 * 二叉树的层序遍历
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function (root) {
  if (!root) return []
  const res = []
  let queList = [root];
  let temp = []; // 用于存储下一层级的节点
  let resTemp = [];   // 用户存储当前层级的值 
  let p;
  while (queList.length > 0 || temp.length > 0) {
    if (queList.length === 0) {  // 当队列长度为0，说明当前层级所有节点已经访问过
      res.push(resTemp);    //保存当前层级的值
      queList = temp;    //访问下一层
      temp = [];
      resTemp = [];
    }
    p = queList.shift();
    if (p) {
      resTemp.push(p.val);
      temp.push(p.left);
      temp.push(p.right);
    }
  }
  return res;
};