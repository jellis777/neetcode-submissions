class Solution {
    /**
     * @param {string} s
     * @return {number}
     * 
     Example 2:

Input: s = "neetcodeneet"
Output: 4
     */
    firstUniqChar(s) {
        const count = {};

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        for (let i = 0; i < s.length; i++) {
            if (count[s[i]] === 1) {
                return i;
            }
        }

        return -1; 
    }
}


/**
  CLARIFY:
    Input: string
    Output: integer -> index of the first non-repeating character
    Edge cases: All repeating characters -> return -1;
                " " empty string -> return -1; 

    NAIVE SOLUTION:
        BF ->   for(let i = 0; i < s.length; i++) {
                  let flag = true;
                  for (let j = 0; j < s.length; j++) {
                  if (i === j)  continue; 
                  if (s[i] === s[j]) {
                    flag = false;
                    break; 
                  
                  }
                  if (flag) return i;  
                  }

                  return -1; 
                  }

          Time: O(n^2)
          Space: O(1); 

      OPTIMAL PATTERN:  HashMap

      PSEUDO CODE /PLAN:
      - Create count Hashmap
      - Iterate through s and add to count Hashmap
      -Iterate through s and see if count[char] === 1 then return index;

      Time: O(n)
      Space: O(1)
 */
