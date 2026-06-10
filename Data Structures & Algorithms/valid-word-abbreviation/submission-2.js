class Solution {
    /**
     * @param {string} word
     * @param {string} abbr
     * @return {boolean}
     */
    validWordAbbreviation(word, abbr) {
        let i = 0;
        let j = 0;

        while (i < word.length && j < abbr.length) {
            if (abbr[j] >= "0" && abbr[j] <= "9") {
                if (abbr[j] === "0") return false;

                let num = 0;

                while (j < abbr.length && abbr[j] >= "0" && abbr[j] <= "9") {
                    num = num * 10 + Number(abbr[j]); 
                    j++;
                }

                i += num; 
            } else {
                if (word[i] !== abbr[j]) {
                    return false
                }

                i++;
                j++;
            }
        } 

        return i === word.length && j === abbr.length
    }
}

/**
  INPUT: string  ->  word
         string  -> abbr

  OUTPUT: boolean  -> True if abbr is a correct abbreviation of word

  CONSTRAINTS: 1 <= word.length <= 100
               word  -  consists of lowercase letters
               1 <= abbr.length <= 100
                abbr - consists of digits and lowercase letters

    EDGE CASES: word = "a"  abbr = "1"  -> true
                                    "a"  -> true

                word = "aaa"  abr = "aa1"
                                    = "a2"  or "aaa"

    INITIAL APPROACH:  - IF word === abbr are the same   return true
                        - Use two pointers
                            - i = 0
                            - j= 0
                        - distance = ""
                        - While (i < word.length && j < abbr.length) 
                                - IF word[i] === abbr[j]  
                                    - THEN i++ j++
                                - ELSE IF (a/\d+/g.test(abbr[j])) {
                                      distance += abbr[j]
                                      j++
                                } 
                                - word[i] !== abbr[j]
                                    - return false
                         - return true; 
 */