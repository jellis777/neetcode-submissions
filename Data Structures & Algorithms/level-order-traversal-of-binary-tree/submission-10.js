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
     * @param {TreeNode} root
     * @return {number[][]}
     */
    levelOrder(root) {
        if (!root) return [];

        const queue = [root];
        let head = 0;
        let result = [];

        while (head < queue.length) {
            let level = [];
            let levelSize = queue.length - head;

            for (let i = 0; i < levelSize; i++) {
                const node = queue[head++];

                level.push(node.val);

                if (node.left) queue.push(node.left);
                if (node.right) queue.push(node.right);
            }

            result.push(level);
        }

        return result;
    }
}
