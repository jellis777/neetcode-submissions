class Solution {
    /**
     * @param {number[]} arr
     * @return {number}
     */

    // Turbulent pattern === < > < >   ||   > < > < 

    maxTurbulenceSize(arr) {
        let left = 0;
        let maxLen = 1; 

        for (let right = 1; right < arr.length; right++) {
            const prevCompare = Math.sign(arr[right - 1] - arr[right]); 

            if (prevCompare === 0) {
                left = right;
            } else if (right === arr.length - 1) {
                maxLen = Math.max(maxLen, right - left + 1);
            } else {
                const nextCompare = Math.sign(arr[right] - arr[right + 1]); 

                if (prevCompare * nextCompare !== -1) {
                    maxLen = Math.max(maxLen, right - left + 1);
                    left = right; 
                }
            }
        }

        return maxLen; 

    }
}
