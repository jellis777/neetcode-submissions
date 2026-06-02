class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        const sortedHeights = [...heights].sort((a, b) => a - b) 

        let notExpected = 0;

        for (let i = 0; i < heights.length; i++) {
            if (heights[i] !== sortedHeights[i]) {
                notExpected++
            }
        }

        return notExpected; 
    }
}

/**
 INPUT: []int -> heights 
 OUTPUT: int   ->   number of indices where heights[i] !== expected[i];

 CONSTRAINTS: 1 <= heights.length <= 100
              1 <= heights[i] <= 100

 EDGE CASES: - [1, 2, 3, 4, 5] -> 0  Already In Order
             - [5, 4, 3, 2, 1] -> 5  All are out of order
             - [2] ->0 In order already

 INITIAL APPROACH:   - Sort a copy of the array
                    - count variable
                    - Iterate over the array 
                         - compare each element with the sorted and if not match increase count 
                    - return count

                    Time: O(n log n)
                    Space: O(n)

                    *Optimal solution
 */