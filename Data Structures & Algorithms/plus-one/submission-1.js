class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        const number = Number(digits.join(""))
        console.log(number); 

        let newNumber = number + 1; 

        let result = [];

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