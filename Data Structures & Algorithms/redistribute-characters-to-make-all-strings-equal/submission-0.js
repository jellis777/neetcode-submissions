class Solution {
    /**
     * @param {string[]} words
     * @return {boolean}
     */
    makeEqual(words) {
        const count = {}; 

        // Insert char into count
        for (let word of words) {
            for (let char of word) {
                count[char] = (count[char] || 0) + 1;
            }
        }

        // Iterate over count to check if divisible by words.length
        for (let char in count) {
            if (count[char] % words.length !== 0) {
                    return false; 
            }
        }

        return true; 
    }
}

/**
  INPUT: []strings  -> words
  OUTPUT:  boolean   ->   TRUE if any number of operations can be made between two distinct indices to make all 
                             words equal
                          FALSE otherwise

  CONSTRAINTS: 1 <= words.length <= 100;
                1 <= words[i].length <= 100;
                words[i] consists of lowercase English letters; 

 EDGE CASES:  words = ["zaz", "abz", "b"]  -> false

 INITIAL APPROACH:   - const count = {}
                    - Iterate over words and each word and insert into count
                    - Iterate over count 
                        -IF value is % words.length !== 0 
                            THEN FALSE
                    - return TRUE

                    Time: O(n * m);
                    Space: O(1)





 */