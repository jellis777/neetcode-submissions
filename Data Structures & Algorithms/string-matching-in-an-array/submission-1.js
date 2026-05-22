class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        const output = [];

        for (let i = 0; i < words.length; i++) {
            for (let j = 0; j < words.length; j++) {
                if (i === j) continue;

                if (words[j].includes(words[i])) {
                    output.push(words[i]);
                    break;
                }
            }
        }

        return output
    }
}

/**
 CLARIFY: 
    - Input: []string - words
    - Output: []string - the substrings of another word in words;

Edge Cases:
    - words is empty -> return []
    - no matching substrings -> return []

PSEUDO CODE:
- Output array 
- Put the words in a set
- Check if other words include that word


 */
