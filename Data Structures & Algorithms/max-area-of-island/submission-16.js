class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let maxArea = 0; 

        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 0) {
                return 0;
            }

            grid[r][c] = 0;

            let area = 1;

            area += dfs(r + 1, c)
            area += dfs(r - 1, c)
            area += dfs(r , c + 1)
            area += dfs(r , c - 1)

            return area;
        }

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    let area = dfs(r, c)
                    maxArea = Math.max(maxArea, area)
                }
            }
        }

        return maxArea; 
    }
}

/**
 Give to CHAT!!!!!!

 INPUT: [][]int -> grid
 OUTPUT: int  -> maxArea of the island(1's connected horizontally or vertically); 

 CONSTRAINTS: 1 <= grid.length, grid[0].length <= 50
 EDGE CASES: No 1's -- No island  ->  0 
            - only one 1  -> 1 
            - multiple islands -> but return only the maxArea 
                    - could have a tie 

 INITIAL APPROACH: 
        - Use BFS or DFS;
        - I'll use DFS for simplicity 
        - keep track of area and update the maxArea for each island
        - return area

        Time: O(r * c) -> worst case
        Space: O(r * c) -> call stack -> worst case

    PSEUDO CODE:
        - rows, cols variables
        - dfs(r, c) helper function
            - check boundaries
            - visit cell = 0;
            - area =  1 + 
                    recusively call each direction.
            - return area
        - traverse through grid
            - if grid[r][c] === 1   
                - area = dfs(r, c)
                - maxArea = Math.max(area, maxArea)
        - return area; 
 
 */
