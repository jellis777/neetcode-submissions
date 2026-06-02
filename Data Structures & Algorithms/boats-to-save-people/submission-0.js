class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     
     DRY RUN: 
      people=[1,3,2,3,2]    [1, 2, 2, 3, 3]         boats = 2
        limit=3                 l  
                                r
     */
    numRescueBoats(people, limit) {
        let boats = 0;
        let left = 0;
        let right = people.length - 1;

        people.sort((a, b) => a -b);

        while (left <= right) {
            if (people[left] + people[right] <= limit) {
                left++
            }
            right--;
            boats++;
        }

        return boats; 
    }
}
/**
 INPUT: []int -> people;
        int  ->  limit;

 OUTPUT: int  -> min number of boats to carry every given person

 CONSTRAINTS: - 1 <= people.length <= 50,000
              - 1 <= people[i] <= limit <= 30,000

 EDGE CASES: people = [4]  limit = 4  -> 1
              people = [1, 1, 1]  limit = 2  -> 2



 INITIAL APPROACH: 
        - Sort people by weight ascending
        - Use two pointers; l =0; r = people.length - 1;
        - boats = 0
        - While (l < r)
             - Heaviest always goes if not paired with a smaller weight
             - boats++

        - return boats 

        Time: O(n)
        Space: O(1)
 */