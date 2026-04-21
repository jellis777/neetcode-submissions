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
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            let next = curr.next; // save next node
            curr.next = prev; // reverse pointer
            prev = curr; // move prev forward
            curr = next; // move curr forward
        }

        return prev; 
    }
}
