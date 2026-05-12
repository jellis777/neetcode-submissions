class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const result = []; 
        const path = [];
        const used = new Set()

        function backtrack() {
            if (path.length === nums.length) {
                result.push([...path]);
                return;
            }

            for (let num of nums) {
                if (used.has(num)) continue; 

                path.push(num)
                used.add(num)

                backtrack()

                path.pop()
                used.delete(num)
            }
        }

        backtrack()
        return result; 
    }
}
