class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
        let i = 0;
        let j = 0;

        while (i < s.length && j < t.length) {
            if (s[i] === t[j]) {
                i++;
                j++
            } else {
                j++
            }
        }

        return i < s.length ? false : true 
    }
}

/**
 INPUT: string  -> s
        string  ->  t

 OUTPUT: boolean;  -> whether s is a subsequence of t

 CONSTRAINTS: 0 <= s.length <= 100
              0 <= t.length <= 10,000
              s & t consists of only lowercase letters

 EDGE CASES: s = "" t= ""  -> true
             s = ""  t = "abcde"  false
             s = "aaaa"  t= "abzmdalllasd"  -> false

 INITIAL APPROACH: Two pointers one on s and the other on t
                    - while (i < s.length && j < t.length)
                    - move both pointers(i & j) when there's a match
                    - move only the j pointer when no match
                    - if i < s.length  return false;
                        - else return true; 

                Time: O(n + m)
                Space: O(1)
 */