class Solution {
    /**
     * @param {string} num
     * @return {string}
     */
    largestGoodInteger(num) {
        let counter= 1; 
        let goodInteger = -Infinity 

        for (let i = 1; i < num.length; i++) {
            if (num[i] === num[i - 1]) {
                counter++
            } else {
                counter = 1; 
            }

            if (counter >= 3) {
                goodInteger = Math.max(goodInteger, Number(num[i]))
            }
        }

        return goodInteger === -Infinity ? "" : String(goodInteger).repeat(3)

    }
}

/**
  INPUT: string  -> num
  OUTPUT: string ->  THE MAXIMUM GOOD INTEGER AS A STRING or "" IF NO SUCH INTEGER EXISTS

  CONSTRAINTS: 3 <= nums.length <= 1000
               num only consists of digits 
               - GOOD INTEGER :
                    - substring of num with length of 3;
                    - consists of only one unique digit;

  EDGE CASES:  "7777788900"  -> 7
                "666777999"  -> 9
                "334567" -> ""

  INITIAL APPROACH:  - Use counter = 1
                    - goodInteger = null
                    - Iterate over newNum starting at i =1; i < num.length; i++
                         - IF newNum[i] === newNum[i - 1] 
                                THEN  counter++;
                         - ELSE counter = 1
                         -update goodInteger = Math.max(newNum[i], goodInteger)

                    - return String(goodInteger).repeat(3)

                    Time: O(n);
                    Space: O(1)
                    


 */
