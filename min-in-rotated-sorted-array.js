/**
 * https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    var start = 0;
    var end = nums.length-1;
    
    while (start < end) {
        if (nums[start] < nums[end]) {
            return nums[start];
        }
        
        var mid = Math.floor((start + end)/2);
        
        if (nums[mid] >= nums[start]) {
            // we know that the rotation happened in second half
            start = mid + 1;
        } else {
            end = mid;
        }
    }
    
    return nums[start];
};
