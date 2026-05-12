class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a, b) => a[1] - b[1]);

        let amt = 0;
        let prevEnd = intervals[0][1];

        for (let i = 1; i < intervals.length; i++) {
            const [start, end] = intervals[i];

            if (start < prevEnd) {
                amt++;
            } else {
                prevEnd = end;
            }
        }

        return amt;
    }
}
