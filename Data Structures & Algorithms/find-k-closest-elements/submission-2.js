class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        let l = 0;
        let r = arr.length - 1;

        while (r - l + 1 > k) {
           

            if (Math.abs(arr[l] - x) > Math.abs(arr[r] - x)) {
                l++; 
            } else {
                r--; 
            }

        }

        return arr.slice(l, r + 1)
    }
}

/**
 INPUT: []int -> arr  (SORTED IN ASCENDING ORDER)
        int -> k (amount of our return)
        int -> x  (target)
 OUTPUT: []int  -> k amount of integers that are closest to x

 CONSTRAINTS: -  An integer a is closer to x than an integer b if:
                |a - x| < |b - x|, or
                |a - x| == |b - x| and a < b  (if abs difference tied, choose smaller integer)

               -    1 <= k, arr.length <= 10,000
               -   -10,000 <= arr[i], x <= 10,000
EDGE CASES:  - If tie return smaller int; 
            - If k === arr.length return arr; 
            - x could be in arr so distance would be 0 and that would be the closest possible int

 INITIAL APPROACH: - Because arr is SORTED in ascending order
                        - Use l and r pointer on each end
                        - While loop  (r - l + 1 > k) 
                            - IF (absolutes equal && arr[l] < arr[r]) 
                                     r--;
                            - ELSE l++; 
                            - IF ABS(arr[l] - x) < ABS(arr[r] - x)
                                    r--;
                            - ELSE 
                                    l++

                        - return arr.slice(l, r + 1)

                        Time: O(n)
                        Space: O(1)

 */
