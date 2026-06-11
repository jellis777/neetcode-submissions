class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const count = {}; 

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for (let char of t) {
            if (!count[char]) {
                return false;
            }

            count[char]--;
        }

        return true; 
    }
}

/**
 INPUT: s -> string
        t -> string 

 OUTPUT: boolean  ->  ARE S AND T ANAGRAMS OF EACH OTHER
 CONSTRAINTS: - 1 <= s.length, t.length <= 5 * 10^4
              - only lowercase letters
 EDGE CASES: - have to have equal amount of characters including duplicates 
             - s and t are equal (their the exact same)  -> true
             - if s and t are not the same length -> false

 INITIAL APPROACH: - Use one hashmap for freq of chars of s
                    - Iterate to put s chars in hashmap
                   - Iterate through t to see if hashmap has that char
                                - IF SO then s[char]--; 
                                - IF NOT return false; 
                    - return true; 

                    Time: O( s + t)
                    Space: O(1)

    DRY RUN: Input: s = "racecar", t = "carrace"
            Output: true
            
 */
