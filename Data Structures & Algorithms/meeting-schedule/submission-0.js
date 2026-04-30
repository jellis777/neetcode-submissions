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
     * @return {boolean}
     */
    canAttendMeetings(intervals) {
        intervals.sort((a, b) => a.start - b.start);

        for (let i = 1; i < intervals.length; i++) {
            const previous = intervals[i - 1];
            const current = intervals[i];

            if (current.start < previous.end) {
                return false;
            }
        }

        return true;
    }
}