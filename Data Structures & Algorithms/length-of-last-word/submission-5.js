class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        let count = 0;
        let i = s.length - 1; 

        while (s[i] === " ") {
            i--;
        }

        while (i >= 0 && s[i] !== " ") {
            count++; 
            i--; 
        }

    

        

        return count; 
    }
}

/**
 INPUT: string -> s (consists of words and spaces)
 OUTPUT: int -> length of the last word(no spaces included)
 CONSTRAINTS: - s.length <= 10,000
             - contains at least one word;
  EDGE CASE: s = "" -> 0
            - only one word; s = "happiness" -> s.length


    INITIAL APPROACH:
        - Trim s
        - Iterate starting at last char 
        - Increment count until there's a space " "

        Time: O(n)
        Space: O(1)
        ** Seems to be optimal

    PSEUDO CODE:
    -let count = 0;
    - s.trim(); 
    - for loop over s starting at s.length - 1; i--
        - count++
        - if s[i] === " " THEN break; 
    
 */
