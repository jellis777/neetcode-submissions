class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    romanToInt(s) {
        const romanToInt = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };
        let sum = 0;

        for (let i = 0; i < s.length; i++) {
            const curr = romanToInt[s[i]]; 
            const next = romanToInt[s[i + 1]]; 

            if (next > curr) {
                sum -= curr
            } else {
                sum += curr; 
            }
        }

        return sum; 
    }
}

/**
 CLARIFY:
    INPUT: s -> string
    OUTPUT: int -> the roman numberal string converted into an integer
    CONSTRAINTS: s.length <= 15; valid range is 1 - 3999
                -  s contains only ('I', 'V', 'X', 'L', 'C', 'D', 'M')
                -  Roman numerals -> largest to smallest from left to right 
                - I can be placed before V (5) and X (10) to make 4 and 9.
                - X can be placed before L (50) and C (100) to make 40 and 90.
                - C can be placed before D (500) and M (1000) to make 400 and 900.
    EDGE CASES: -  s = "" -> 0
    

  INITIAL APPROACH: 
    - hashmap -> romanToInt
    - let sum = 0; 
    - For Loop over s; 
        If (s[i] === I || X || C)
        - switch (s[i + 1] ) {
            case "V": sum -= 1 break; 
            case "L": sum -= 10;
            case "D": sum -= 100; 
            default: sum += romanToInt[s[i]]
        
        }
    - return the sum; 
    
            - 

    TIME: O(n)
    SPACE:  O(1)


 */
