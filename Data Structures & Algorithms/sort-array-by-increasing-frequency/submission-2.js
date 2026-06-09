class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    frequencySort(nums) {
        const count = new Map();
        const result = [];

        for (let num of nums) {
            count.set(num, (count.get(num) || 0) + 1);
        }

        const sorted = nums.sort((a, b) => {
            if (count.get(a) === count.get(b)) {
                return b - a;
            } else {
                return count.get(a) - count.get(b);
            }
        });

        return sorted;
    }
}

/**
 INPUT:  []int  -> nums
 OUTPUT: []int  ->  sorted by increasing order based on frequency; AND if frequency tie -> sord in decreasing order
 
 CONSTRAINTS: 1 <= nums.length <= 100;
              -100 <= nums[i] <= 100;

 EDGE CASES:  [98]  ->  [98]
            [66, 66, 68, 66, 69]  -> [69, 68, 66, 66, 66] 


 INITIAL APPROACH:  const count = new Map() 
                    - let result = []
                    -  Iterate over nums
                            - Insert freq into count
                    -  const sorted [...count.keys().sort((a, b) => {
                        if (count[a] === count[b]) {
                            return b - a
                        } else {
                            return count[a] - count[b]
                        }
                    
                    })]

                    - return sorted
            
            Time: O(n log n); 
            Space: O(n)

 
 */
