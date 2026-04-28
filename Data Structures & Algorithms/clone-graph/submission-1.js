/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        const oldToNew = new Map();

        function dfs(originalNode) {
            // If we've already cloned this node, return the clone
            if (oldToNew.has(originalNode)) {
                return oldToNew.get(originalNode);
            }

            // Create a clone of the current node
            const clone = new Node(originalNode.val); 

            // Save it before cloneing neighbors
            oldToNew.set(originalNode, clone);

            // Clone every neighbor and connect it to this clone
            for (let neighbor of originalNode.neighbors) {
                clone.neighbors.push(dfs(neighbor));
            }

            return clone;
        }

        return dfs(node); 
    }
}
