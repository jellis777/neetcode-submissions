class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    nextGreaterElement(nums1, nums2) {
        const stack = []; 
        const nextGreater = {};

        for (let num of nums2) {
            while (stack.length > 0 && stack[stack.length - 1] < num) {
                const smaller = stack.pop();
                nextGreater[smaller] = num; 
            }

            stack.push(num)
        }

        return nums1.map(num => nextGreater[num] ?? -1); 
    }
}
