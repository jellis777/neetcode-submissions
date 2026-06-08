class Solution {
    /**
     * @param {string} path
     * @return {boolean}
     */
    isPathCrossing(path) {
        let x = 0;
        let y = 0;

        const visited = new Set([`${x}, ${y}`]);

        const directions = {
            "N": [0, 1],
            "S": [0, -1],
            "E": [1, 0 ],
            "W": [-1, 0],
        };

        for (let char of path) {
            const [dx, dy] = directions[char]

            x += dx;
            y += dy;

            const position = `${x}, ${y}`

            if (visited.has(position)) {
                return true;
            }

            visited.add(position)
        }

        return false; 
    }
}
/**
 INPUT: string -> path
 OUTPUT: boolean ->  TRUE if a point is previously visited OTHERWISE FALSE

 CONSTRAINTS:  1 <= path.length <= 10,000
                path[i] is either 'N', 'S', 'E', 'W'

 EDGE CASES: path = "NNNN" -> false
             path = "NNNNSSSS"  -> true

 INITIAL APPROACH:  - let point = [0, 0];
                    - visited = new Set([point]); 
                    - directions = {
                        "N" : [0, 1],
                        "S" : [0, -1],
                        "W" : [-1, 0],
                        "E" : [1, 0]
                    }
                    - Iterate over the path
                        - let [x, y] = point 
                        - let [newX, newY] = directions[char]
                        - point = [x + newX, y + newY]
                        if (visited.has(point)) {
                            return TRUE;
                        }
                        -visited.add(point)
                    - return FALSE;

                    Time: O(n); 
                    Space: O(n)
 */
