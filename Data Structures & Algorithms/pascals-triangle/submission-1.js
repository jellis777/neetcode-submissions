class Solution {
    /**
     * @param {number} numRows
     * @return {number[][]}
     */
    generate(numRows) {
        const result = [];

        for (let row = 0; row < numRows; row++) {
            const currRow = [];

            for (let col = 0; col <= row; col++) {
                if (col === 0 || col === row) {
                    currRow.push(1);
                } else {
                    currRow.push(result[row - 1][col - 1] + result[row - 1][col]);
                }
            }

            result.push(currRow)
        }

        return result; 
    }
}

/**
   INPUT: int -> numRows
   OUTPUT: [][]int  ->  the elements of numRows

   CONSTRAINTS: 1 <= numRows <= 30
                - each element is a sum of the two numbers directly above it
   EDGE CASES: numRows = 1   -> [[1]]

    INITIAL APPROACH: 
        - result = [];
        - for each row:
            create new row

            - for each column:
                if first or last column: 
                    push 1
                else push sum of two values from previous row
            -add row to result
        - return result

        Time: O(n^2);
        Space: O(n^2)

 */
