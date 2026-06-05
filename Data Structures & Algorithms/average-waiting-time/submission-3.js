class Solution {
    /**
     * @param {number[][]} customers
     * @return {number}
      
      DRY RUN:  
      customers = [[1,2],[2,5],[4,3]]       wait = 15 / 3  -> 5
                                            end = 11
                                            nextEnd = 11

      customers=[[5,2],[5,4],[10,3],[20,1]] wait = 12
                                            end = 14
                                            nextEnd = 14

      customers=[[2,3],[6,3],[7,5],[11,3],[15,2],[18,1]]    wait = 21
                                                            end = 19
                                                            nextEnd = 19

     */
    averageWaitingTime(customers) {
       let wait = 0;
       let end = 0;

       for (let [arrival, time] of customers) {
        end = Math.max(end, arrival) + time;
        wait += end - arrival
       }

       return wait / customers.length
    }
}

/**
 INPUT: [][]int  ->  customers
 OUTPUT:  decimal  ->  average waiting time for customers

 CONSTRAINTS:  1 <= customers.length <= 10^5
               1 <= arrivali, timei <= 10^4
               arrival[i] <= arrival[i+1]
               - IN SORTED ORDER ASCENDING BY START TIME

 EDGE CASES: [[5,2], [5, 4], [5,3], [5,6]] -> (2, 6, 9, 15)  32/ 4  = 8 
                2      6      9      15
              [[1, 2], [3, 2], [5, 2]]      ->  2
                2         2        2

 INITIAL APPROACH:   -  End = start + time
                    -  nextEnd = end + time
                    -  wait += nextEnd - start
                    -  IF customers[0] -> wait = end
                    - Iterate over customers and get calculation using variables
                    -  return wait / customers.length

            Time: O(n);
            Space: O(1)

 PSEUDO CODE:
            - let wait = 0
            - let end = start + time
            - For loop over customers 
               - Destructure [start, time] = customers[i]
               - IF customers[0] THEN wait += time
               - ELSE nextEnd = end + time
                      wait += nextEnd - start
            - return wait / customers.length; 


 */
