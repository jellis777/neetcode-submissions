class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles)

        while (left < right) {
            const mid = Math.floor((left + right) / 2); 

            let hours = 0;

            for (let pile of piles) {
                hours += Math.ceil(pile/mid)
            }

            if (hours <= h) {
                right = mid; 
            } else {
                left = mid + 1; 
            }
        }

        return left; 
    }
}
/**
 INPUT: []int -> piles
        int -> h
 OUTPUT: int  -> minimum k(bananas) to eat per hour in order to eat within h
 CONSTRAINTS:-  1 <= piles.length <= 1,000
            - piles.length <= h <= 1,000,000
            - 1 <= piles[i] <= 1,000,000,000

 EDGE CASES: - One pile [200], h = 9  -> 200 / 9
            - [2, 2, 2, 2], h = 4

 INITIAL APPROACH: Binary Search
                - use left pointer = 1
                - use right pointer =  Get max of pile of piles 
                - While (left < right)
                    - find mid
                    - get amount of hours per pile (pile / mid)
                    - if hours <= h THEN right = mid
                    - ELSE left = mid + 1;
                - return left; 

                Time: O(log n); 
                Space: O(1)
 */