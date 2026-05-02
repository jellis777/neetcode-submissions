class Solution {
    /**
     * @param {string[]} words
     * @param {string} order
     * @return {boolean}
     */
    isAlienSorted(words, order) {
        // Step 1: build rank map
        const map = {};
        for (let i = 0; i < order.length; i++) {
            map[order[i]] = i;
        }

        // Step 2 : compare adjacent words
        for (let i = 0; i < words.length - 1; i++) {
            if (!this.inCorrectOrder(words[i], words[i + 1], map)) {
                return false;
            }
        }

        return true;
    }

    inCorrectOrder(word1, word2, map) {
        const minLen = Math.min(word1.length, word2.length); 

        for (let i = 0; i < minLen; i++) {
            if (word1[i] !== word2[i]) {
                return map[word1[i]] < map[word2[i]]; 
            }
        }

        // If all chars match, shorter word should come first

        return word1.length <= word2.length; 
    }
}
