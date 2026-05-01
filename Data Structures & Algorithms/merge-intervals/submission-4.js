class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0])
        let result = [];

        for (let interval of intervals) {
            const [start, end] = interval;

            if (result.length === 0) {
                result.push([start, end]);
                continue; 
            }

            let last = result[result.length - 1];

            if (start <= last[1]) {
                last[1] = Math.max(last[1], end);
            } else {
                result.push([start, end]);
            }
        }

        return result; 
    }
}
