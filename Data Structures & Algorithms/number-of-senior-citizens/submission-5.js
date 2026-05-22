class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     *
     * @param {string[]} details
     * @return {number}
     *
     * -Find M or F in the string and extract the next two chars;
     * - Convert to number and if over 60 then increase count variable
     *
     * Rules: 0 - 9 phone number
     *        10 gender
     *        11 - 12 age;
     */
    countSeniors(details) {
        let count = 0;

        for (let detail of details) {
            const age = detail.slice(11, 13);

            if (Number(age) > 60) {
                count++;
            }
        }

        return count; 
    }
}
