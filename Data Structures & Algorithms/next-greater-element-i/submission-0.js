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
            while (stack.length > 0 && num > stack[stack.length - 1]) {
                const smaller = stack.pop();
                nextGreater[smaller] = num;
            }

            stack.push(num);
        }

        return nums1.map(num => nextGreater[num] ?? -1); 
    }
}

/**
 CLARIFY:
    Input: []int -> nums1; []int -> nums2;
    Output: []int -> the next greater element of nums2[j] in nums2; 


 NAIVE SOLUTION:
    Time: O(n2) -> nested loop; Once find matchin number in nums2, then record any number greater than number in num2;
    if not push -1; 

 */
