/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 * 
 *   - sort by start time ascending
 *   - loop through and IF intervals[i].start is < intervals[i].end then FALSE;
 *  
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @return {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start); 

        for (let i = 1; i < intervals.length; i++) {
            const curr = intervals[i].start;
            const prev = intervals[i - 1].end;

            if (curr < prev) {
                return false;
            }
        }

        return true; 
    }
}