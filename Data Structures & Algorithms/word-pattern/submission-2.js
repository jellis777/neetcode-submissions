class Solution {
    /**
     * @param {string} pattern
     * @param {string} s
     * @return {boolean}
     */
    wordPattern(pattern, s) {
        const charToWord = {};
        const usedWords = new Set(); 

        const words = s.split(" ")
        if (pattern.length !== words.length) return false

        for (let i = 0; i < pattern.length; i++) {
            let char = pattern[i];
            let word = words[i]; 

            if (charToWord[char]) {
                if (charToWord[char] !== word) {
                    return false; 
                } 
            } else {
                if (usedWords.has(word)) {
                    return false;
                }

                charToWord[char] = word;
                usedWords.add(word); 
            }
        }

        return true; 
    }
}
