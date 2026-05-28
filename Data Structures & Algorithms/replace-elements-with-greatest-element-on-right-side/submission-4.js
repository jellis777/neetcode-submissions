class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            let temp = arr[i]; 

            arr[i] = rightMax; 

            rightMax = Math.max(rightMax, temp);
        }

        return arr; 
    }
}

/**
 INPUT: arr -> []int
 OUTPUT: []int -> Each element is replaced by the greatest element to the right; Last element is replaced by -1;
 CONSTRAINTS: - 1 <= arr.length <= 10,000
                 - arr[i] <= 100,000;
 EDGE CASES: - [2, 2, 2,2, 2] -> [2, 2, 2, 2, -1]
            - [3] -> [-1]
            - [1, 4, 4, 4, 2, 4] -> [4, 4, 4, 4, 4, -1]
            - [5, 6, 1, 1, 1] -> [6, 1, 1, 1, -1]


  INITIAL APPROACH: 
    -  Brute Force: 
        - Nested loop -> comparing arr[i] with arr[j] getting the max and replacing arr[i];
    Time: O(n^2)
    Space: O(1)
    ** Not optimal for size of input

    OPTIMAL APPROACH:
        - var rightMax = -1
        - Iterate from the end of arr and replace each element with rightMax
        - Update rightMax = Math.max(rightMax, arr[i])
        - return arr; 

        Time: O(n)
        Space: O(1)
 */
