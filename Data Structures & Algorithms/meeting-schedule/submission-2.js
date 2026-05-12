/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start) 

        for (let i = 1; i < intervals.length; i++) {
            let curr = intervals[i].start
            let prev = intervals[i -1].end

            if (curr < prev) {
                return false;
            }
        }


        return true; 
    }
}
