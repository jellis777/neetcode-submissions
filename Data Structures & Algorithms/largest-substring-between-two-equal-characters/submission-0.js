class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxLengthBetweenEqualCharacters(s) {
        const charIndex = {};
        const set = new Set(); 
        let maxLength = -Infinity; 

        for (let i = 0; i < s.length; i++) {
            if (!(s[i] in charIndex)) {
                charIndex[s[i]] = i;
            } 
            console.log(charIndex)
        }

        for (let i = 0; i < s.length; i++) {
            if (set.has(s[i])) {
                maxLength = Math.max(maxLength, i - charIndex[s[i]]  - 1);
            } else {
                set.add(s[i])
            }
        }

        return maxLength === -Infinity ? -1 : maxLength; 
    }
}

/**
 CLARIFY:
    - Input: string -> s
    - Output: int -> longest substring between two equal characters or -1


    - right - left - 1   -> length of the substring in between the two equal chars

  EDGE CASES: If there were no equal chars -> return -1; 
            - Empty string -> return -1; 

  CONSTRAINTS: - s contains only lowercase letters
                - how long could s be? 

    PSEUDO CODE: 
        - use a HashMap to keep index of char in first appearance
        - if HashMap has char subtract current index with the map[char] and update maxLength;
        - return maxLength or -1 if maxLength === -Infinity; 

    TIME: O(n)
    SPACE: O(1)

 */
