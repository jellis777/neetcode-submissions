class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     * 
    /* 
      CLARIFY 
     * @param {number} n
     * @param {number[][]} edges
     * @return {boolean}
   

    IDENTIFY PATTERN
    - Use DFS/BFS graph traversal

    PLAN - Time/Space 
    - A graph is a valid tree if: no cycles and all nodes are connected; 
    - A valid treee for an undirected graph must have exactly n - 1 edges. 

    EXECUTE  - Code!!


    */
    validTree(n, edges) {
        if (edges.length !== n - 1) return false; 

        const adj = Array.from({length : n}, () => []); 

        for (const [a, b] of edges) {
            adj[a].push(b); 
            adj[b].push(a); 
        }

        const visited = new Set(); 

        function dfs(node) {
            if (visited.has(node)) return; 

            visited.add(node); 

            for (const nei of adj[node]) {
                dfs(nei); 
            }
        }

        dfs(0);
        return visited.size === n; 
    }
}
