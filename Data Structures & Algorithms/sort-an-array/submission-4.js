class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // QUICK SORT VERSION      TIME: O(n log n);    SPACE: O(log n); (recursion stack)
    sortArray(nums) {
        this.quickSort(nums, 0, nums.length - 1);
        return nums;
    }

    quickSort(nums, left, right) {
        if (left >= right) return;

        const pivotIndex = this.partition(nums, left, right);

        this.quickSort(nums, left, pivotIndex - 1);
        this.quickSort(nums, pivotIndex + 1, right);
    }

    partition(nums, left, right) {
        const pivot = nums[right];
        let i = left;

        for (let j = left; j < right; j++) {
            if (nums[j] < pivot) {
                [nums[i], nums[j]] = [nums[j], nums[i]]
                i++
            }
        }

        [nums[i], nums[right]] = [nums[right], nums[i]]
        return i; 
    }
}
