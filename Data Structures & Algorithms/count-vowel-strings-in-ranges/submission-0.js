class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */
    vowelStrings(words, queries) {
        const vowels = new Set(["a", "e", "i", "o", "u"])
        const ans = []

        for (let [start, end] of queries) {
            let count = 0;

            for (let i = start; i <= end; i++) {
                    if (vowels.has(words[i][0]) && vowels.has(words[i][words[i].length - 1]) ) {
                        count++;
                    }
            }
            ans.push(count)
        }

        return ans; 
    }
}

/**
 INPUT: []string -> words
        [][]int   -> queries  ( [li, ri]  -- a range in words)

 OUTPUT: []int    ->   the number of strings present in that range of words that start and end with a vowel

 CONSTRIANTS: - Size of input? minimum length and max length of words and queries? And the size of each string?
              - Is this cases sensitive? Is it only lowerCase letters?
        
 EDGE CASES: - [] Empty array for words or queries
             - Uppercase letters
             - words = ["a"] ,  queries = [0,0]  ->  [1]


 INITIAL APPROACH: - Have a Set of the vowels
                    - ans variable
                   - Iterate through queries
                        - count variable
                            - Iterate through that range of words
                            - Check if set.has word[0] && word[word.length - 1]
                            - count++
                        - ans.push(count)
                   - return ans

                   Time: O(n * m)
                   Space: O(n)

              
 */