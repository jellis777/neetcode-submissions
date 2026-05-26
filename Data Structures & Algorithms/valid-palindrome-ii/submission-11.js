class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     
     *DRY RUN: 
      - Input: s = "abbadc"
        Output: false
     */
    validPalindrome(s) {
        function isPalindrome(l, r) {
            while (l < r) {
                if (s[l] !== s[r]) {
                    return false;
                }
                l++;
                r--;
            }

            return true;
        }

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (s[left] === s[right]) {
                left++;
                right--;
            } else {
                return isPalindrome(left + 1, right) || isPalindrome(left, right - 1);
            }
        }

        return true;
    }
}

/**
  CLARIFY:
    - INPUT: s -> string;
    - OUTPUT: boolean -> Is it s a palindrome even by deleting AT MOST one character. 
    -CONSTRAINTS: s.length <= 100,000; s contains only lowercase English letters; 
    - EDGE CASES: s = "" -> true
                - If have to delete more than once -> false
                - If already palindrome -> true; 

    INITIAL APPROACH:
     - Two pointers; one at the start; one at the end; Comparing both chars
     - oneDelete = true
     - If they match THEN left++ && right--;
     - Else if ->  IF oneDelete is already false return false; 
                    - ELSE IF oneDelete = false and left ++ && right--; 
     - Return true; 

     Time: O(n);
     Space: O(1)


 */
