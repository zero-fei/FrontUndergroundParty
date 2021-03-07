function TreeNode (val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const preorder = [3, 9, , 15, 7]
const inorder = [9, 3, 15, 20, 7]

const buildTree = function (preorder, inorder) {
  function mapTree (preArr, inArr, begin, end) {
    console.info(begin, end)
    if (begin > end) return null;

    const index = inArr.indexOf(preArr[0]);    // 找到pre第一个节点在in的位置，左边为左子树，右边为右子树
    const node = new TreeNode(preArr[0]);   //新建子树的根节点
    preArr.shift();
    node.left = mapTree(preArr, inArr, begin, index - 1);    //递归遍历左子树
    node.right = mapTree(preArr, inArr, index + 1, end);   //递归遍历右子树

    return node;
  }
  return mapTree(preorder, inorder, 0, inorder.length - 1);
};

console.info(buildTree(preorder, inorder))

