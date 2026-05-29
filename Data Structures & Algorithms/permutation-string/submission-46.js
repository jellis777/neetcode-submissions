class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let l = 0;
        const count1 = new Array(26).fill(0);
        const count2 = new Array(26).fill(0);

        for (let char of s1) {
            count1[char.charCodeAt(0) - 97]++;
        }

        for (let r = 0; r < s2.length; r++) {
            const char = s2[r];
            
                count2[char.charCodeAt(0) - 97]++;
        

            if (r - l + 1 > s1.length) {
                count2[s2[l].charCodeAt(0) - 97]--;
                l++;
            }

            if (this.arraysEqual(count1, count2)) {
                return true;
            }
        }
        return false;
    }

    arraysEqual(count1, count2) {
        for (let i = 0; i < 26; i++) {
            if (count1[i] !== count2[i]) {
                return false;
            }
        }

        return true;
    }
}

/**
  INPUT: s1 -> string 
         s2 -> string

  OUTPUT: boolean -> True IF s2 has a permutation of s1; ELSE false 
  
  CONSTRAINTS: - Both stings contain only lowercase letters; 
               -  1 <= s1.length, s2.length <= 1000
   EDGE CASES: - s2.length === s1.length  Both would need to have the same count of letters 
                s1 = "zzzzz"  s2 would need to contain that  string  with at least that amount of duplicates

    INITIAL APPROACH:  SLIDING WINDOW -FIXED (SIZE OF s1)
          - left and right pointer 
          - put into an array the count of char of s1 - count1 []
          - same for char of s2 -> count2 []
          - Iterate over s2
                - if s1 doesn't have s2[i]  left++; 
                if ( right- left + 1 === s1.length)
                         - compare both counts;
                         - If so return true; 

          - default return false; 


          Time: O(n + m)  -> s1.length + s2.length
          Space: O(1) -> size of the alphabet
 */
