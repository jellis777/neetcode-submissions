class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        const seen = new Set();
        const rows = grid.length;
        const cols = grid[0].length;
        let result = [-1, -1];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (seen.has(grid[r][c])) {
                    result[0] = grid[r][c];
                }
                seen.add(grid[r][c]);
            }
        }

        for (let i = 1; i <= rows * rows; i++) {
            if (!seen.has(i)) {
                result[1] = i; 
            }
        }

        return result; 
    }
}

/**
     CLARIFY:
        - INPUT: [][]int ->grid --- containing numbers 1 - row.length * row.length
        - OUTPUT: []int -> [dupInt, missingInt ]
        - CONSTRAINTS: LENGTH AND ROWS ARE THE SAME; 
                - length of 50 
                - only one duplicate 
                - only one missing from 1 - n^2
        - EDGE CASES: 
                    - 

      INITIAL APPROACH: 
                - Create a set(seen)
                - Iterate through grid and insert into set
                    - IF set.has(num) THEN result[0] = num; 

                - Iterate from 1 to grid.length * grid.length 
                    - Check if !set.has(i) -> result[1] = i
                - return result; 

            Time: O(r * c); 
            Space: O(r * c); 
     */
