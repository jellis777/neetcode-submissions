class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} threshold
     * @return {number}
     */
    numOfSubarrays(arr, k, threshold) {
        let windowSum = 0;
        let targetSum = k * threshold;
        let count = 0;

        for (let i = 0; i < k; i++) {
            windowSum += arr[i];
        }

        if (windowSum >= targetSum) count++;

        for (let right = k; right < arr.length; right++) {
            let left = right - k;

            windowSum -= arr[left];
            windowSum += arr[right];

            if (windowSum >= targetSum) count++;
        }

        return count; 
    }
}
