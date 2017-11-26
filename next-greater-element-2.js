/**
 * https://leetcode.com/problems/next-greater-element-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    var result = [];
    var stack = [];
    
    for (var j = 0; j < nums.length; j++) {
        result.push(-1);
    }
    
    for (var i = 0; i < nums.length * 2; i++) {
        var num = nums[i % nums.length];
        while (stack.length &&
               nums[stack[stack.length-1]] < num) {
            result[stack.pop()] = num;
        }
        if (i < nums.length) {
            stack.push(i);
        }
    }
    return result;
};
