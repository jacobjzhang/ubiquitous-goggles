/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var isValidBST = function(root) {
    var stack = [];
    
    if (!root) { return true; }
    
    var previous = null;
    while (root != null || stack.length !== 0) {
        while (root != null) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (previous && previous.val >= root.val) { return false; }
        previous = root;
        root = root.right;       
    }
    
    return true;
};
