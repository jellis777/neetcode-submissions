class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let count0 = 0;
        let count1 = 0;

        for (let student of students) {
            if (student === 0) {
                count0++;
            } else {
                count1++;
            }
        }

        for (let sandwich of sandwiches) {
            if (sandwich === 0) {
                if (count0 === 0) {
                    return count1;
                }
                count0--; 
            } else {
                if (count1 === 0) {
                    return count0;
                }
                count1--; 
            }
        }

        return 0;
    }
}
// time: O(n + m);
// spaace: O(1); 

/**
 CLARIFY: 
    - INPUT: students -> []int ; sandwiches -> []int; 
    - OUTPUT: int -> number of students unable to eat; (amount of students left in queue)
    - CONSTRAINTS/RULES: 
             - IF front of queue matches top of stack then students.shift() and sandwiches.shift();
            - ELSE const student = students.shift() and students.push(student)

            - All elements are 1's and 0's
            - Both are the same length
            - 1 <= length <= 100
    - EDGE CASES:  

    INITIAL APPROACH:
        - 



EXAMPLE: 
    Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]
    Output: 3           [    1, 1, 1]                [  0, 1, 1]

    students = [1,1,0,0], sandwiches = [0,1,0,1]
                1, 1, 0 , 0             0, 1, 0, 1              stack = [1, 1, 0]
                     1  1  0           1 0 1
                    0 1                     0 1
 */
