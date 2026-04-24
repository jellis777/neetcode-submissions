class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let A = nums1;
        let B = nums2;

        // Always binary search the smaller array
        if (A.length > B.length) {
            [A, B] = [B, A];
        }

        const total = A.length + B.length;
        const half = Math.floor((total + 1) / 2); 

        let left = 0;
        let right = A.length;

        while (left <= right) {
            let i = Math.floor((left + right) / 2) // cut in A
            let j = half - i;     // cut in B; 

            let Aleft = i > 0 ? A[i - 1] : -Infinity;
            let Aright = i < A.length ? A[i] : Infinity; 

            let Bleft = j > 0 ? B[j- 1] : -Infinity;
            let Bright = j < B.length ? B[j] : Infinity;

            // Correct partition
            if (Aleft <= Bright && Bleft <= Aright) {
                if (total % 2 === 1) {
                    return Math.max(Aleft, Bleft); 
                }

                return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2; 
            }

            // Too far right in A
            if (Aleft > Bright) {
                right = i - 1;
            } else {
                // Too far left in A
                left = i + 1; 
            }
        }
    }
}
