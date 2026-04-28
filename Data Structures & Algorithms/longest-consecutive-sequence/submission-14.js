class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let result = 0;
        let set = new Set(nums); 

        for (let num of nums) {
        
            if (!set.has(num - 1)) {
                let length = 1; 
                while (set.has(num + length)) {
                    length++;
                }

                result = Math.max(result, length); 
            }
        }
        return result; 

    }
}
