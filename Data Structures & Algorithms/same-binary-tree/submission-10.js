/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let queue = [[p, q]]; 

        while (queue.length) {
            let [a, b] = queue.shift();

            if (!a && !b) continue;

            if (!a || !b || a.val !== b.val) return false;

            queue.push([a.left, b.left]); 
            queue.push([a.right, b.right]); 
        }

        return true; 
    }
}
