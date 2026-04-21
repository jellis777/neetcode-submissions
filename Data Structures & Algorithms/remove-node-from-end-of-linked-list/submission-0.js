/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let dummy = new ListNode(0, head); 
        let slow = dummy; 
        let fast = dummy;

        // move fast n+1 steps ahead
        for (let i = 0; i <= n; i++) {
            fast = fast.next; 
        }

        // move both until fast reaches end
        while (fast) {
            slow = slow.next;
            fast = fast.next; 
        }

        // remove node 
        slow.next = slow.next.next

        return dummy.next; 
    }
}
