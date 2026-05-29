class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        let l = 0;
        let operations = 0;
        let minOperations = Infinity;

        for (let r = 0; r < blocks.length; r++) {
            if (blocks[r] === "W") {
                operations++;
            }

            if (r - l + 1 > k) {
                if (blocks[l] === "W") {
                    operations--;
                }
                l++;
            }

            if (r - l + 1 === k) {
                minOperations = Math.min(minOperations, operations);
            }
        }

        return minOperations;
    }
}

/**
 INPUT: string -> blocks (CONATAINS ONLY "W" and "B"'s)
        int -> k  (DESIRED NUMBER OF CONSECUTIVE BLACK BLOCKS)

 OUTPUT: int -> MINIMUM NUMBER OF OPERATIONS needed to have AT LEAST ONE OCCURRENCE OF K CONSECUTIVE BLACK BLOCKS.

 CONSTRAINTS:  -   1 <= k <= blocks.length <= 100; 
               -   blocks CONSISTS ONLY OF "W" AND "B"
               - For each operation, you can only recolor one white block to become black 

 EDGE CASES:  - "WWWWWWWW"  (All W's) ->   k = 3   ;  return 3
              - "BBBBBBBB"  (All B's) -> k = 5;   return 0
              - "W"  (Just one W) -> k = 1; return 1; 
              - "W" (K = 0); -> k = 0;   return 0;  (Don't need any B's)
              - "WBWBWWWB" (Mixed) -> k = 4 ; return 2; 

 INITIAL APPORACH: 
    - let minOperations = 0;
    - Fixed Sliding window -> seeing minimum number of operations. 
    - Iterate over blocks   i = 0; i < blocks.length - k;      Time: O(n^2)
                            j = i; j < i + k ; j++              Space O(1) 
                            Keep count of W's 
                            update minOperations. 
    

    OPTIMAL APPROACH: Fixed Sliding Window -> with a left and right; 
                        Right expands and if over k; then left++ and if a "W" decrement operations. 
    - let l = 0;
    - let operations;
    - let minOperations; 
    -  for (let r = 0; r < blocks.length; r++) {
        IF "W"  then  operations++

        If r - l + 1 > k  THEN left++ and IF blocks[left] === "W" THEN operations--;

        Update minOperations -> Math.min
    }

    return minOperations; 

    Time: O(n)
    Space: O(1)

 */
