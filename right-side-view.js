/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
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
var rightSideView = function(root) {
    if (!root) { return []; }
    
    var queue = [];
    queue.push(root);
    
    var rightSide = [];
    
    while(queue.length) {
        var queueSize = queue.length;
        
        for (var i = 0; i < queueSize; i++) {
            
            var currentNode = queue.shift();
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
            
            if (i === queueSize-1) {
                rightSide.push(currentNode.val);
            }
        }
    }
    
    return rightSide;
};
