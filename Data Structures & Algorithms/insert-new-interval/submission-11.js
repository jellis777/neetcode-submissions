class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        intervals.sort((a,b) => a[0] - b[0])
        let result = []; 

        for (let i = 0; i < intervals.length; i++) {
            const [start, end] = intervals[i]; 

            if (end < newInterval[0]) {
                result.push([start, end])
            } else if (start > newInterval[1]) {
                result.push(newInterval)

                for (let j = i; j < intervals.length; j++) {
                    result.push(intervals[j])
                }

                return result; 
            }

            else {
                newInterval[0] = Math.min(newInterval[0], start);
                newInterval[1] = Math.max(newInterval[1], end); 
            }
        }

        result.push(newInterval);
        return result; 
    }
}
