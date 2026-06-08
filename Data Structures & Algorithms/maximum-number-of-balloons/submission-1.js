class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        const count = {};

        for (let char of text) {
            count[char] = (count[char] || 0) + 1;
        }

        return Math.min(
            count["b"] || 0,
            count["a"] || 0,
            Math.floor((count["l"] || 0) / 2),
            Math.floor((count["o"] || 0) / 2),
            count["n"] || 0,
        );
    }
}

/**
 INPUT: str  -> text
 OUTPUT: int  -> max number of instances of "balloon" that can be formed without resusing each character

 CONSTRAINTS: - 1 <= text.length <= 10,000
                text -- consists of only lowercase letters

 EDGE CASES:  - text.length < "balloon".length
            -  text doesn't contain "balloon" at all -> 0
             - text doesn't contain each letter needed for each possible instance of balloon
                    text = "loonbalxballpon"   -> 1
            
 INITIAL APPROACH: - A hashmap for "balloon"
                   - A hashmap for text
                   - Iterate over balloon hashmap 
                        -  Check if !textMap[key] return false;
                        -   
 */
