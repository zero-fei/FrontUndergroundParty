/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var increasingBST = function(root) {
     const res = []
    const inORrder = (root, res) => {
        if(!root) return
        inORrder(root.left, res)
        res.push(root.val)
        inORrder(root.right, res)
    }
    inORrder(root, res)

    const dummyNode = new TreeNode(-1);
    let currNode = dummyNode;
    for (const value of res) {
        currNode.right = new TreeNode(value);
        currNode = currNode.right;
    }
    return dummyNode.right;
};