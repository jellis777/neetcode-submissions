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

            if (end < newInterval[0]) {
                result.push(intervals[i]);
            } else if (start > newInterval[1]) {
                result.push(newInterval);

                for (let j = i; j < intervals.length; j++) {
                    result.push(intervals[j]);
                }

                return result;
            } else {
                newInterval[0] = Math.min(start, newInterval[0]);
                newInterval[1] = Math.max(end, newInterval[1]);
            }
        }

        result.push(newInterval);
        return result; 
    }
}
