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
        let next = curr.next;
        curr.next = prev;
        prev = curr
        curr =next;
       }

       return prev; 
    }
}

/**
 INPUT: head -> []int
 OUTPUT: []int -> head reversed
 CONSTRAINTS: - 0 <= The length of the list <= 1000
              - -1000 <= Node.val <= 1000
 EDGE CASES: - head = [] -> []; 
             - Any mixed int list will return the reversed order 

 INITIAL APPROACH: 
    - prev is at end -> null
    - while curr.next {
        - curr.next = prev; 
        - prev = curr; 
        - curr = next; 
    }
 */