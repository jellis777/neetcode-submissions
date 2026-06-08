class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let result = []; 
        const number = Number(digits.join(""))

        let newNumber = number + 1; 

        while (newNumber > 0) {
            result.unshift(newNumber % 10); 
            newNumber = Math.floor(newNumber / 10)
        }

        return result; 
    }
}


/**
 * 
 */