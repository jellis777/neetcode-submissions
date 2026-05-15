class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false;

        const adj = Array.from({ length: n }, () => []);

        for (let [a, b] of edges) {
            adj[a].push(b);
            adj[b].push(a);
        }

        const visited = new Set();

        function dfs(node) {
            if (visited.has(node)) return;

            visited.add(node);

            for (let neigh of adj[node]) {
                dfs(neigh);
            }
        }

        dfs(0);
        return n === visited.size;
    }
}
