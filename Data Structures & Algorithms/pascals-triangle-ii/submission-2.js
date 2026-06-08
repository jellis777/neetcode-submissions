class Solution {
    /**
     * @param {number} rowIndex
     * @return {number[]}
     */
    getRow(rowIndex) {
        let row = [1];

        for (let i = 1; i <= rowIndex; i++) {
            const nextRow = [1]; 

            for (let j = 1; j < i; j++) {
                nextRow.push(row[j - 1] + row[j]); 
            }

            nextRow.push(1);
            row = nextRow;
        }

        return row; 
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
