class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    minOperations(s) {
        let startWithZero = 0
        let startWithOne = 0;

        for (let i = 0; i < s.length; i++) {
            const expectedZeroPattern = i % 2 === 0 ? "0" : "1"; 
            const expectedOnePattern = i % 2 === 0 ? "1" : "0"; 

            if (s[i] !== expectedZeroPattern) {
                startWithZero++;
            }

            if (s[i] !== expectedOnePattern) {
                startWithOne++; 
            }
        }

        return Math.min(startWithZero, startWithOne); 
    }
}
/**
 INPUT: string -> s
 OUTPUT: int  -> MINIMUM NUMBER OF OPERATIONS NEEDED TO MAKE S ALTERNATING;

 CONSTRAINTS:  1 <= s.length <= 10,000
                s consists of only "1"'s  & "0"'s

 EDGE CASES: "1111"  -> could be "0101" or "1010" -> 2 operations
             "0000"  -> same thing  -> 2 operations

 INITIAL APPROACH:  - operations = 0;
                    - Iterate through s
                        - If next element is the same as previous
                                -operations++;
                    - return operations;

                    Time: O(n); 
                    Space: O(1); 
 */