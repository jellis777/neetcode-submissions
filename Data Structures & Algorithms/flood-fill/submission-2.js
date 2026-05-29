class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {
        const originalColor = image[sr][sc];
        const rows = image.length;
        const cols = image[0].length;

        if (originalColor === color) return image;

        function dfs(r, c) {
            if (r < 0 || c < 0 || r >= rows || c >= cols || image[r][c] !== originalColor) {
                return;
            }

            image[r][c] = color;

            dfs(r + 1, c);
            dfs(r - 1, c);
            dfs(r, c + 1);
            dfs(r, c - 1);
        }

        dfs(sr, sc); 

        return image; 
    }
}

/**
 INPUT: image -> [][]int
        sr -> int
        sc -> int     (sr & sc tell us the coordinates of where to start and the original color)
        color -> int   

 OUTPUT: [][]int  -> image (modified in place); 

 CONSTRAINTS:   1 <= m, n <= 50; 
                sr & sc are within the image

 EDGE CASES:  - source color (original) is the same as color (new)  ->  Nothing changes - return image
              -   Only changes colors in bounds and the same as the original both horizontally and vertically
              - If no adjacent colors with the same color -> then no changes and returns the image;


 INITIAL APPROACH:  Use DFS or BFS 
                - Start at the source and compare the originalColor with color
                        - IF THE SAME then return image
                - write dfs helper function   (r, c)
                        - Check if in bounds and currentColor === originalColor; 
                        - visit source and change originalColor to color
                        - call dfs recursively for each direction
                -  call dfs(sr, sc) 
                - return image; 

                Time: O(r * c)  -> worst case
                Space: O(r * c)  -> call stack -> worst case


 */
