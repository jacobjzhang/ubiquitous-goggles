/**
 * https://leetcode.com/problems/reverse-string-ii/description/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("");
    
    let i = 0;
    while (i < s.length) {
        const j = Math.min(i + k - 1, s.length - 1);
        swap(s, i, j);
        i += 2 * k;
    }
    
    return s.join("");
};

function swap(arr, l, r) {
    while (l < r) {
        const temp = arr[l];
        arr[l++] = arr[r];
        arr[r--] = temp;
    }
}
