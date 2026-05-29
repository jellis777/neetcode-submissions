class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const parent = {};
        const rank = {};

        function find(node) {
            if (parent[node] !== node) {
                parent[node] = find(parent[node]); // path compression
            }
            return parent[node];
        }

        function union(n1, n2) {
            const p1 = find(n1);
            const p2 = find(n2);

            if (p1 === p2) {
                return false; // already connected, so this edge creates a cycle
            }

            if (rank[p1] > rank[p2]) {
                parent[p2] = p1;
            } else if (rank[p2] > rank[p1]) {
                parent[p1] = p2;
            } else {
                parent[p2] = p1;
                rank[p1]++;
            }

            return true;
        }

        for (let [a, b] of edges) {
            parent[a] = a;
            parent[b] = b;
            rank[a] = rank[a] || 0;
            rank[b] = rank[b] || 0;
        }

        for (let [a, b] of edges) {
            if (!union(a, b)) {
                return [a, b];
            }
        }
    }
}
