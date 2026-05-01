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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (intervals.length === 0) return 0;

        const starts = intervals.map((i) => i.start).sort((a, b) => a - b);
        const ends = intervals.map((i) => i.end).sort((a, b) => a - b);

        let rooms = 0;
        let end = 0;

        for (let start = 0; start < starts.length; start++) {
            if (starts[start] < ends[end]) {
                rooms++;
            } else {
                end++;
            }
        }

        return rooms; 
    }
}
