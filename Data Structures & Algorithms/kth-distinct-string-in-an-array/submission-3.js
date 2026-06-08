class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        const count = {}; 

        for (let str of arr) {
            count[str] = (count[str] || 0) + 1;
        }

        for (let str of arr) {
            if (count[str] === 1) {
                k--;
            }

            if (k === 0) {
                return str; 
            }
        }

        return ""; 
    }
}

/**
 INPUT: []string -> arr
        int  -> k

 OUTPUT: string  -> the kth distinct string in arr

 CONSTRAINTS: 1 <= k <= arr.length <= 1000
              1 <= arr[i].length <= 5 
              arr[i] consists of lowercase letters

 EDGE CASES:  arr = ["a", "a", "b", "b"], k = 1   -> ""
              arr = ["a", "b", "c"] k = 2  -> "b"

 INITIAL APPROACH: 
        - use a hashMap to keep count of strings
        - Iterate over keys of hashMap to find counts of 1 
                - return kth key
                - else return ""

        Time: O(n);
        Space: O(n)
 */
