/**
 * https://leetcode.com/problems/word-break/description/
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    var boolArr = new Array();
    for (var i = 0; i <= s.length; i++) {
        boolArr[i] = false;
    }
    
    boolArr[0] = true;

    // have two pointers, one to track the progression of letters in s
    // the other to scan for substring starts
    for (var j = 1; j <= s.length; j++) {
        for (var k = 0; k < j; k++) {
            // check if the previous entry had been verified already
            if (boolArr[k] && wordDict.indexOf(s.substring(k, j)) > -1) {
                boolArr[j] = true;
            }
        }
    }
    
    return boolArr[s.length];
};
