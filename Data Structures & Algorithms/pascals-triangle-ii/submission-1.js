class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        let triangle = [];

        for (let row = 0; row <= rowIndex; row++) {
            const currRow = [];

            for (let col = 0; col <= row; col++) {
                if (col === 0 || col === row) {
                    currRow.push(1);
                } else {
                    currRow.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
                }
            }

            if (row === rowIndex) {
                return currRow;
            }
            
            triangle.push(currRow)
        }
    }
}
/**
 INPUT:  int  -> rowIndex
 OUTPUT:  []int  -> the elements found in that rowIndex

 CONSTRAINTS:  1 <= numRows <= 33;

 EDGE CASES: rowIndex = 0  -> first row
             rowIndex = 32  -> very last row

 INITIAL APPROACH:   
                - Create the triangle up to that rowIndex
                - If currRow === rowIndex {
                return currRow;
                }

                Time: O(n^2)
                Space: O(n^2)
 */
