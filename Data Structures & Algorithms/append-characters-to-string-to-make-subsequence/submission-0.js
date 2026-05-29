class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0,
            j = 0; 

        while (i < s.length && j < t.length) {
            if (s[i] !== t[j]) {
                i++
            } else {
                i++; 
                j++; 
            }
        }

        return t.length - j; 
    }
}

/**
 INPUT: s -> string
        t -> sting 

 OUTPUT: int -> min number of chars needed to append to s for t to be a subsequence of s

 CONSTRAINTS: - s & t -> consists of only lowercase letters
               - 1 <= s.length, t.length <= 100,000
               
  EDGE CASES:  - If s contains t already -> 0   
               - If s doesn't have any chars of t -> append t.length 
                        - Input: s = "z", t = "abcde"
                           Output: 5
                - If s has some of t then append the amount that is missing -> number of missing chars

 INITIAL APPROACH: - i pointer start of s; j pointer start of t
                   - If not a match increment i Else increment i an j
                   - return t.length - j 

                   Time: O(n + m);
                   Space: O(1)

 PSEUDO CODE/PLAN:
     - i = 0 ; j = 0; 
     - while (i < s.length && j < t.length) 
            - if (s[i] !== t[i])   THEN    i++;
    - return t.length - j
 */
