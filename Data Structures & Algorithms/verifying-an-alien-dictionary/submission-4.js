class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        const map = {};

        for (let i = 0; i < order.length; i++) {
            map[order[i]] = i;
        }

        for (let i = 0; i < words.length - 1; i++) {
            if (!inCorrectOrder(words[i], words[i + 1])) {
                return false; 
            } 
        }

        return true; 

        function inCorrectOrder(word1, word2) {
        let minLen = Math.min(word1.length, word2.length); 

        for (let i = 0; i < minLen; i++) {
            if (word1[i] !== word2[i]) {
                return map[word1[i]] < map[word2[i]]
            }
        }

        return word1.length <= word2.length; 
    }
    }

   
}

/**
 INPUT: words -> []string ; order -> string;
 OUTPUT: boolean -> IF "WORDS" IS SORTED IN ALPHABETICAL ORDER;
 CONSTRAINTS:-  1 <= words.length <= 100; 
             - 1 <= words[i].length <= 20;
            - order.length === 26; 
            - All English characters

 EDGE CASES: - words = [] -> true
             - words = all same word -> true
             - if shorter match comes after like:
                ["neetcode","neet"]  -> false

INITIAL APPROACH:
        - alienAlphIndex = {}; 
        - Iterate over order and insert   char  = index
        - iterate over words 
            - iterate over each letter of each word comparing that letter with next letter and swap accordingly
        
 */
