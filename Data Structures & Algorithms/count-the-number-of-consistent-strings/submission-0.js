class Solution {
    /**
     * @param {string} allowed
     * @param {string[]} words
     * @return {number}
     */
    countConsistentStrings(allowed, words) {
        const allowedSet = new Set(allowed);
        let consistent = 0;

        for (let word of words) {
            let isConsistent = true;

            for (let char of word) {
                if (!allowedSet.has(char)) {
                    isConsistent = false;
                    break; 
                }
            }

            if (isConsistent) {
                consistent++; 
            }
        }

        return consistent; 
    }
}

/**
  CLARIFY:
    INPUT: string -> allowed; []string -> words;
    OUTPUT: int -> number of consistent strings in the array words;

    RULES / CONSTRAINTS:
    - Consistent string -> if a word/string has letters that are also in  "allowed"
    - words.length <= 10,000     allowed <= 26;
    - Only lowercase letters and "allowed" - distinct

    EDGE CASES:
    - words [] -> 0
    -  all match allowed -> words.length 
    - Are they all lowercase? 

    INITIAL APPROACH:
    - Create a set from "allowed";
    - Iterate through every word and check if set has each letter
    - IF set(allowed) has all letters then increment consistent count; 
    - return count; 

    Time: O(n);
    Space: O(m)

 */
