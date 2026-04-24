class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const count = new Map(); 

        for (let i = 0; i < numbers.length; i++) {
            const complement = target - numbers[i];

            if (count.has(complement)) {
                return [count.get(complement) + 1, i + 1]
            }

            count.set(numbers[i], i); 
        }
    }
}
