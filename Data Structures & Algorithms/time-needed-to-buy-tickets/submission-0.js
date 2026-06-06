class Solution {
    /**
     * @param {number[]} tickets
     * @param {number} k
     * @return {number}
     */
    timeRequiredToBuy(tickets, k) {
        let time = 0;

        for (let i = 0; i < tickets.length; i++) {
            if (i <= k) {
                time += Math.min(tickets[i], tickets[k]); 
            } else {
                time += Math.min(tickets[i], tickets[k] - 1); 
            }
        }

        return time; 
    }
}

/**
 INPUT: []int  -> tickets
        int   ->  k

 OUTPUT: int   -> the number of seconds for the kth elemnt to sell all of their tickets

 CONSTRAINTS:  - 1 <= tickets.length <= 100
                 1 <= tickets[i] <= 100
                 0 <= k < tickets.length

 EDGE CASES:  - All the same number   tickets = [1, 1, 1]  k = 1;   -> 2

 INITIAL APPROACH: - 
 */