class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */
    findLucky(arr) {
        const count = {};
        let maxLucky = 0;

        for (let num of arr) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let num of arr) {
            if (count[num] === num) {
                maxLucky = Math.max(maxLucky, num);
            }
        }

        return maxLucky > 0 ? maxLucky : -1;
    }
}

/**
 INPUT:  []int  -> arr

 OUTPUT:  int  -> THE LARGEST LUCKY (FREQUENCY IS EQUAL TO THE ELEMENT) NUMBER

 CONSTRAINTS:  - 1 <= arr.length <= 500
               - 1 <= arr[i] <= 500

 EDGE CASES:  arr = [3]  -> -1
            arr = [4, 4, 4, 4, 1, 1, 2, 2, 2, 3, 3, 3] -> 4

 INITIAL APPROACH:    
                - use count = {}
                - maxLuckyNumber = 0
                - Traverse through arr 
                        -insert frequency into count
                - Traverse through arr
                    - IF count[arr[i]] === arr[i] {
                    maxLuckyNumber = Math.max(maxLuckyNumber, arr[i])
                    }
                - return maxLuckyNumber

                Time: O(n)
                Space: O(n)
 */
