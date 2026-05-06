class Solution {
    /*
    I/O:
    -Input: pattern: string
    -Outpus: boolean (whether there is a pattern)

    Rules:


    Edge Cases:


    Optimal: 


    Complexities: 
     
     */
    wordPattern(pattern, s) {
        const charToWord = {};
        const usedWords = new Set();

        const words = s.split(" ");

        if (pattern.length !== words.length) return false;

        for (let i = 0; i < words.length; i++) {
            const char = pattern[i];
            const word = words[i];

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
