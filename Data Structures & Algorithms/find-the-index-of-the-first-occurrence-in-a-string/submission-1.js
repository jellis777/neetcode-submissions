class Solution {
    /**
     * @param {string} haystack
     * @param {string} needle
     * @return {number}
     */
    strStr(haystack, needle) {
        for (let i = 0; i <= haystack.length - needle.length; i++) {
            let j = 0;

            while (j < needle.length && haystack[i + j] === needle[j]) {
                j++;
            }

            if (j === needle.length) {
                return i; 
            }
        }

        return -1; 
    }
}

/**
 CLARIFY:
    INPUT: haystack: string;   needle: string; 
    OUTPUT: int  -> the first occurence (index) of needle in haystack. If no occurrence, then -1;

    CONSTRAINTS/RULES:  - all lowercase
                        - haystack.length && needle.length <= 10,000
    EDGE CASES:   - IF needle = ""  -> return -1;
                  - IF haystack = "" -> return -1; 


INITIAL APPROACH:
    - Left and right pointer
    - Use a hashmap for the count of needle's char
    - While loop -> right < haystack.length
    - count[haystack[left]]-- if it has haystack[right] and right ++; Else IF not count[haystack[right]] 
    - If needle doesn't have haystack[right]; left = right + 1 && right++; 
    - If right - left +1 === needle.length then return left; 

    Time: O(haystack + needle)
    Space: O(needle)

PSEUDO CODE /PLAN:
    -  First pointer iterating through haystack.length - needle.length;
    -  Second pointer iterates using while loop (j < need.length && haystack[i + j] === needle[j]) then j++;
    - IF j === needle.length return i ;
    - ELSE/DEFAULT return -1 ; 

    Time: O(n * m)
    Space: O(1)

                  
 */
