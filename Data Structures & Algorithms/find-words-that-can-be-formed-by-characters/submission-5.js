class Solution {
    /**
     * @param {string[]} words
     * @param {string} chars
     * @return {number}
     */
    countCharacters(words, chars) {
        const charsFreq = {};
        let sum = 0;

        for (let char of chars) {
            charsFreq[char] = (charsFreq[char] || 0) + 1;
        }

        for (let word of words) {
            let wordsFreq = { ...charsFreq };
            let isValid = true;

            for (let char of word) {
                if (!wordsFreq[char] || wordsFreq[char] <= 0) {
                    isValid = false;
                    break;
                } else {
                    wordsFreq[char]--;
                }
            }

            if (isValid) {
                sum += word.length;
            }
        }

        return sum; 
    }
}

/**
 INPUT: []string -> words
        string -> chars

 OUTPUT: int  ->  sum of lengths of all good strings 

 CONSTRAINTS:   GOOD STRING:
                    - a string that can be formed by characters from chars
                    - each char can only be used once for each word in words

                - 1 <= words.length <= 1000
                - 1 <= words[i].length, chars.length <= 100
                - words[i] and chars consist only of lowercase English letters

 EDGE CASES:  ["cat"]  chars= "tacll"  output: 3
               ["catc"]  chars= "tacll"  output: 0

 INITIAL APPROACH:  - create two arrays
                        - charsArray contains frequency of each char
                        - wordsArray = [...charsArray];
                    - sum = 0
                    - Iterate over each word
                        - if (!wordsArray[char] || wordsArray[char] <= 0) {
                        break;
                        } else {
                            wordsArray[char.charCodeAt(0) - 97]--
                        }

                      -End of loop 
                            - wordsArray = [...charsArray]; 
                                sum += words[i].length;
                    return sum; 

                    Time: O(n * m)  words.length * string.length(max)
                    Space: O(n) -> chars.length

              
 */
