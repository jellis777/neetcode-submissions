class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindrome(s) {
        const count = {};

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        let length = 0;
        let hasOdd = false;

        for (let char in count) {
            if (count[char] % 2 === 0) {
                length += count[char];
            } else {
                length += count[char] - 1;
                hasOdd = true;
            }
        }

        return hasOdd ? length + 1 : length;
    }
}

/**
 INPUT: string -> s
 
 OUTPUT: int  -> LENGTH of the longest palindrome that can be built with letters of s

 CONSTRAINTS: - case sensitive
              - s consists of lowercase and/or uppercase English letters only
              - 1 <= s.length <= 2,000

 EDGE CASES: - palindromes can have a middle duplicate substring or just a single character
             "a"  =>  1
             "aaaa"  => 4
             abaaccaaba
             

 INITIAL APPROACH: - use hashmap and count all of chars of s
                   - one odd or one even amount
                    OR
                    - one

 */
