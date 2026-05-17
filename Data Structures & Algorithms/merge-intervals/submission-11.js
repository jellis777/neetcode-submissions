class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]) 
        const output = []

        for (let interval of intervals) {
            const [start, end] = interval; 

            if (output.length === 0) {
                output.push([start, end]);
            }

            let last = output[output.length - 1]

            if (start <= last[1]) {
                last[1] = Math.max(end, last[1])
            } else {
                output.push([start, end]); 
            }
        }

        return output; 
    }
}
