class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        let onesRight = 0;
        
        for (let char of s) {
            if (char === "1") {
                onesRight++
            }
        }

        let zerosLeft = 0;
        let maxScore = 0;

        for (let i = 0; i < s.length - 1; i++) {
            if (s[i] === "0") {
                zerosLeft++;
            } else {
                onesRight--; 
            }

            maxScore = Math.max(maxScore, zerosLeft + onesRight)
        }

        return maxScore

    }


}


    /**
     INPUT: s -> string
     OUTPUT: int -> max score after splitting s -> maxSum of zeroCount in left substring and oneCount in right substring
     CONSTRAINTS: - 2 <= s.length <= 500
                - contains only "0" and "1"'s
                - the substrings cannot be empty
    EDGE CASES: - s = "" -> 0
                - "111110" -> 0
                - "011111" -> 6 

    INITIAL APPROACH: 
        Brute force:
            - Nested loops - Outer Loop is left side and inner loop is right side
            - update maxSum
        Time: O(n^2)
        Space: O(1)


    OPTIMAL PATTERN/ APPROACH:   Track zeroes on the left, and the Ones on the right, try every split; 

    PLAN:
        - oneRight = 0;
        - For Loop over s and increment oneRight for each char === "1";
        - zerosLeft = 0;
        - maxScore = 0;

        - For Loop to s.length - 1 
            - for every elemnt === 0 zerosLeft++; 
            - Else -> onesRight--; 
            - maxScore = Math.max(maxScore, zerosLeft + zerosRight)

        -return maxScore

        TIME: O(n);
        SPACE: O(1)
     */
