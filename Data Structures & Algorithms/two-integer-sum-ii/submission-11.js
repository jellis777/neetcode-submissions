class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0;
        let r = numbers.length - 1;

        while (l < r) {
            let currSum = numbers[l] + numbers[r];

            if (currSum === target) {
                return [l + 1, r + 1]; 
            } else if (currSum < target) {
                l++;
            } else {
                r--;
            }
        }

        return []; 
    }
}
