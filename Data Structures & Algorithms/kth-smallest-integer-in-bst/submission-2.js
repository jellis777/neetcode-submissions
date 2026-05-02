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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const values = [];

        function inorder(node) {
            if (!node) return;

            inorder(node.left);
            values.push(node.val);
            inorder(node.right);
        }

        inorder(root);
        return values[k - 1];
    }
}
