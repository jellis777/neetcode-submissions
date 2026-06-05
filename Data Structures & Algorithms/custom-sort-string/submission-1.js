class Solution {
    /**
     * @param {string} order
     * @param {string} s
     * @return {string}
     */
    customSortString(order, s) {
        const count = {};

        for (let char of s) {
            count[char] = (count[char] || 0) + 1;
        }

        let result = "";
        for (let char of order) {
            while (count[char] > 0) {
                result += char;
                count[char]--;
            }
        }

        for (let char of s) {
            while (count[char] > 0) {
                result += char;
                count[char]--;
            }
        }

        return result; 
    }
}

/**
 INPUT: string -> order
        string -> s 

 OUTPUT: string   -> s in sorted order based off of order 

 CONSTRAINTS: 1 <= order.length <= 26
              1 <= s.length <= 200

 EDGE CASES: No letters of s in order  then return any order of s
             If order has only one or some  of chars of s then  the order of the other chars doesn't matter


 INITIAL APPROACH: -  HashMap -> char = index
                   -  Iterate over hashmap and while s.includes()
                            - Then result += char
                   -  return result

                   Time: O(n^2)
                   Space: O(1)  
 */
