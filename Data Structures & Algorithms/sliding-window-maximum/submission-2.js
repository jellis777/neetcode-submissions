class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        let result = [];
        let deque = []; // stores indexes, not values;

        for (let right = 0; right < nums.length; right++) {

            while (
                deque.length > 0 &&
                nums[deque[deque.length - 1]] < nums[right]
            ) {
                deque.pop(); 
            }

            deque.push(right);

            let left = right - k + 1;
            if (deque[0] < left) {
                deque.shift();
            }

            if (right >= k - 1) {
                result.push(nums[deque[0]]);
            }
        }

        return result; 
    }
}
