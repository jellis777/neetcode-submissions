class Solution {
    /**
     * @param {string} blocks -> W's and B's
     * @param {number} k -> number of black blocks
     * @return {number} -> min. number of operations 
     * 
     
     * 
     Input: blocks = "WBBWWBBWBW", k = 7
    Output: 3         0123456
                      L     R
          Length  =   R - L + 1
                      k - count[B]
    Input: blocks = "BWWWBB", k = 6
    Output: 3


     */
    minimumRecolors(blocks, k) {
        let left = 0;
        let blackCount = 0;
        let minOps = Infinity;

        for (let right = 0; right < blocks.length; right++) {
            if (blocks[right] === "B") blackCount++;

            if (right - left + 1 > k) {
                if (blocks[left] === "B") {
                    blackCount--;
                }
                left++; 
            }

            if (right - left + 1 === k) {
                const ops = k - blackCount; 
                minOps = Math.min(minOps, ops);
            }
        }

        return minOps; 
    }
}
