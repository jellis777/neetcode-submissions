class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if (edges.length !== n - 1) {
            return false;
        }

        const graph = Array.from({ length: n }, () => []);

        for (const [a, b] of edges) {
            graph[a].push(b);
            graph[b].push(a);
        }

        const visited = new Set();

        const dfs = (node) => {
            if (visited.has(node)) {
                return;
            }

            visited.add(node);

            for (const neighbor of graph[node]) {
                dfs(neighbor);
            }
        };

        dfs(0); 

        return visited.size === n; 
    }
}
