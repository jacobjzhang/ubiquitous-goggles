/**
 * https://leetcode.com/problems/friend-circles/
 * @param {number[][]} M
 * @return {number}
 */

var findCircleNum = function(M) {
    var visited = [];
    
    var count = 0;
    for (var j = 0; j < M.length; j++) {
        if (!visited[j]) {
            dfs(M, visited, j)
            count++;
        }
    }
    return count;
};

function dfs(M, visited, person) {
    for (var i = 0; i < M.length; i++) {
        if (M[person][i] === 1 && !visited[i]) {
            visited[i] = true;
            dfs(M, visited, i);
        }
    }
}
