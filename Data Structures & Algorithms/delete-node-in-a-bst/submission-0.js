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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        if (!root) return null;

        if (key < root.val) {
            root.left = this.deleteNode(root.left, key);
        } else if (key > root.val) {
            root.right = this.deleteNode(root.right, key);
        } else {
            // Found None

            // Case 1: no left child
            if (!root.left) return root.right;

            // Case 2: no right child
            if (!root.right) return root.left;

            // Case 3: two children
            let minNode = this.findMin(root.right);
            root.val = minNode.val;
            root.right = this.deleteNode(root.right, minNode.val);
        }

        return root;
    }

    findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
}
