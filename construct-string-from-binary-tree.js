/**
 * https://leetcode.com/problems/construct-string-from-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
    if (!t) { return ""; }
    
    var left = tree2str(t.left);
    var right = tree2str(t.right);
    
    if (right) {
        return `${t.val}(${left})(${right})`;
    } else if (left) {
        return `${t.val}(${left})`;
    } else {
        return `${t.val}`;
    }
};
