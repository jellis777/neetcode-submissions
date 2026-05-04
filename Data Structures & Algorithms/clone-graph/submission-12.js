/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 * 
 *  - 
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */

    // BFS
    cloneGraph(node) {
        if (!node) return null 

        const oldToNew = new Map(); 

        oldToNew.set(node, new Node(node.val)); 

        let queue = [node];
        let head = 0; 

        while (head < queue.length) {
            let curr = queue[head++]; 

            for (let neighbor of curr.neighbors) {
                if (!oldToNew.has(neighbor)) {
                    oldToNew.set(neighbor, new Node(neighbor.val))
                    queue.push(neighbor)
                }

                oldToNew.get(curr).neighbors.push(oldToNew.get(neighbor))
            }
        }

        return oldToNew.get(node); 
    }
}
