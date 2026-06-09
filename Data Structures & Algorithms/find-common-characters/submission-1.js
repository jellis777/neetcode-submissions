class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    commonChars(words) {
        let common = new Array(26).fill(0); 

        for (let char of words[0]) {
            common[char.charCodeAt(0) - 97]++
        }

        for (let i = 1; i < words.length; i++) {
            let count = new Array(26).fill(0); 

            for (let char of words[i]) {
                count[char.charCodeAt(0) - 97]++
            }

            for (let j = 0; j < 26; j++) {
                common[j] = Math.min(common[j], count[j])
            }
        }
        
        const result = [];
        for (let i = 0; i < 26; i++) {
            while (common[i] > 0) {
                result.push(String.fromCharCode(i + 97))
                common[i]--;
            }
        }

        return result; 
    }
}

/**
  INPUT:  []string  -> words
  OUTPUT:  []string  ->   CONTAINS LETTERS FOUND IN ALL WORDS (INCLUDING DUPLICATES)

  CONSTRAINTS:  1 <= words.length <= 100;
                1 <= words[i].length <= 100;
                words[i] consists of only lowercase leters


  EDGE CASES:   - ["b", "la", "c"]  -> []
                - ["lll", "lolly", "lallp"] -> ["l", "l", "l"]

  INITIAL APPROACH:   - count {}
                       - result = []
                      - insert words[0] into count
                      - Iterate from words[1] < words.length;
                            const checkCount = {...count}
                            Iterate over word
                            Decrement each char from checkCount

                            Iterate over char in checkCount 
                                - Find checkCount[char] <= 0
 */