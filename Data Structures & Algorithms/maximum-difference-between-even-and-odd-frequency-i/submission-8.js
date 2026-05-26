class Solution {
    /**
     * @param {string} s
     * @return {number}
     * 
     DRY RUN: 
     Input: s = "aaaaabbc"           a = 5   b = 2;  c = 1;   max = 5  and min = 2  -> 3
    Output: 3
     */
    maxDifference(s) {
        const freq = {}
        let maxOdd = -Infinity;
        let minEven = Infinity; 

        for (let char of s) {
            freq[char] = (freq[char] || 0) + 1;
        }

        for (let char in freq) {
            if (freq[char] % 2 === 1) {
                maxOdd = Math.max(maxOdd, freq[char])
            } else {
                minEven = Math.min(minEven, freq[char])
            }
        }

        return maxOdd - minEven; 
    }
}

    /**
     CLARIFY: 
        - INPUT: s -> string;
        - OUTPUT: int -> maximum diff between the frequency of characters a1 and a2 in string(s); 
        - CONSTRAINTS/RULES:  - a1 has to have an odd frequency
                              - a2 has to have an even frequency 
                               - Find the max difference between the two;
                               - s contains only lowercase letters
                               - 3 <= s.length <= 100;
                               - At least one char will have odd freq and at least one char will have even freq
        - EDGE CASES:   - s = "" -> 0;
            
    INITIAL APPROACH: 
        - Iterate through s and keep frequency in hashmap
        - Iterate through hashmap 
            - Keep track of max Odd count and min even count;
        - return the difference of maxOdd and minEven; 

        Time: O(n)
        Space: O(1); 

    PSEUDO CODE/ PLAN:
        - const freq = {}; 
        - maxOdd = -Infinity
        - minEven = Infinity
         - Iterate through s and keep frequency in hashmap
         - Iterate through the freq 
                - IF freq[s[i]] % 2 === 1 {
                    maxOdd = Math.max(maxOdd, freq[s[i]])
                    } else {
                    minEven = Math.min(minEven, freq[s[i]])
                    }
        - Return maxOdd - minEven; 

     */
