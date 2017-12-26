/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // keep track of greatest difference
    var maxDiff = 0;
    // iterate through each element and check the difference between it and greater numbers after it
    for (var i = 0; i < prices.length; i++) {
        for (var j = i+1; j < prices.length; j++) {
            var newDiff = prices[j] - prices[i];
            if (newDiff > maxDiff) {
                maxDiff = newDiff;
            }
        }
    }
    
    return maxDiff;
};
