class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        intervals.sort((a, b) => a[0] - b[0]);
        const result = [];

        for (let i = 0; i < intervals.length; i++) {
            const [start, end] = intervals[i];

            if (result.length === 0) {
                result.push([start, end]);
            }

            const last = result[result.length - 1];

            if (last[1] >= start) {
                last[1] = Math.max(last[1], end);
            } else {
                result.push([start, end]);
            }
        }

        return result;
    }
}
