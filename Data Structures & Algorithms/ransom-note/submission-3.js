class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const noteCount = {};
        const magazineCount = {};

        for (let char of ransomNote) {
            noteCount[char] = (noteCount[char] || 0) + 1;
        }
        console.log(noteCount)

        for (let char of magazine) {
            magazineCount[char] = (magazineCount[char] || 0) + 1;
        }
        console.log(magazineCount)
        for (let char in noteCount) {
            if (!magazineCount[char] || magazineCount[char] < noteCount[char]) {
                return false;
            }
        }

        return true; 
    }
}
/**
 INPUT: ransomNote -> string
        magazine -> string 
 OUTPUT: CAN RANSOMNOTE BE CONSTRUCTED BY USING LETTERS FROM MAGAZINE - >   boolean 
 CONSTRIANTS:  - both strings are only lowercase letters
               -  1 <= ransomnote.length, magazine.length <= 100,000 

 EDGE CASES: ransomNote = "a"   magazine = "b"   -> false  (needs one a)
                        "aaaa"             "abc"   -> false (Not enough a's)
                        "bbb"           :abcbccccb"  ->   true 

 INITIAL APPROACH:  - Use hashmaps for freq count for ransomNote and magazine
                    - Compare the hashmaps to see if magazine count is >=  
                            IF SO return true;
                            ELSE return false; 

                            Time: O(n)
                            Space: O(1) -> up to 26 chars in alphabet 

                * seems to be optimal

 PSEUDO CODE: 
            - noteCount = {}
            - magazineCount = {}
            - for loop over ransomNote and insert into noteCount;   char = count 
            - for loop over magazine and insert into magazineCount;  char = count
            - for loop over noteCount and compare if magazineCount[char] >= noteCount[char] -> true -> Else --- false

    


 */
