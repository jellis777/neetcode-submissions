class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const result = [];

        for (let i = 0; i < intervals.length; i++) {
            const [start, end] = intervals[i];

            // Case 1: current interval is completely before newInterval
            if (end < newInterval[0]) {
                result.push(intervals[i]);
            }

            // Case 2: current interval is completely after newInterval
            else if (start > newInterval[1]) {
                result.push(newInterval);

                // add the rest of the intervals
                for (let j = i; j < intervals.length; j++) {
                    result.push(intervals[j]);
                }

                return result;
            }

            // Case 3: overlap, so merge
            else {
                newInterval[0] = Math.min(newInterval[0], start);
                newInterval[1] = Math.max(newInterval[1], end);
            }
        }

        result.push(newInterval);
        return result; 
    }
}
