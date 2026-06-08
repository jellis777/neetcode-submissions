class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        const sToTMap = {};
        const tToSMap = {};

        for (let i = 0; i < s.length; i++) {
         

            if (sToTMap[s[i]] !== undefined && sToTMap[s[i]] !== t[i]) {
                return false;
            }

            if (tToSMap[t[i]] !== undefined && tToSMap[t[i]] !== s[i]) {
                return false; 
            }

            sToTMap[s[i]] = t[i]; 
            tToSMap[t[i]] = s[i]; 
        }

        return true;
    }
}

/**
  INPUT: string  -> s
         string  -> t 

  OUTPUT: boolean -> True if both s and t are isomorphic (if the characters in s can be replaced to get t)

  CONSTRAINTS: 0 <= s.length == t.length <= 50,000
               s and t consists of any valid ascii character

  EDGE CASES: s = ""  t = ""  return true
              s = ""   t= "ab"  return false
              s = "add" t="bee"  return true

  INITIAL APPROACH: - Two hashmaps for mapping each character both ways from s -> t  and t -> s
                            - sToTMap
                            - tToSMap
                    
                    -Traverse over s 
                        - If (sToTMap[char] !== tToSMap[char]  && 
                                tToSMap[char] !== sToTMap[char]  )  {
                                return false
                                }
                        - Insert into each map the character of the other string
                    - return true

                    Time: O(n);
                    Space: O(n); 
                        

    
 */
