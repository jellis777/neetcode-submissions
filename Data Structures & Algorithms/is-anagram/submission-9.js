class Solution {
    /**
     CLARIFY: 
     @param {string} s
     @param {string} t
     @return {boolean}

     RULES: 
     - IF anagrams return true, ELSE return false; 
     - Anagram - the strings have the same number of characters, but the order is different. 

     TOOLS/PATTERNS: Hashmap; 

     EXAMPLE: 
Input: s = "racecar", t = "carrace"
Output: true

Input: s = "jar", t = "jam"
Output: false
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        const map = {};

        // Get frequency of chars of s
        for (let char of s) {
            map[char] = (map[char] || 0) + 1;
        }

        for (let char of t) {
            if (!map[char]) {
                return false;
            }

            map[char]--;
        }

        return true; 
    }
}
