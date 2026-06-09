class Solution {
    /**
     * @param {number[]} arr1
     * @param {number[]} arr2
     * @return {number[]}
     */

    relativeSortArray(arr1, arr2) {
        const count = {};
        let output = [];

        for (let num of arr1) {
            count[num] = (count[num] || 0) + 1;
        }

        for (let num of arr2) {
            while (count[num] > 0) {
                output.push(num);
                count[num]--;
            }
        }

        const remaining = [];

        for (let num in count) {
            while (count[num] > 0) {
                remaining.push(Number(num));
                count[num]--;
            }
        }

        remaining.sort((a, b) => a - b);

        return [...output, ...remaining];
    }
}

/**
   INPUT: []int -> arr1
          []int -> arr2

    OUTPUT: []INT

    CONSTRAINTS:  1 <= arr1.length, arr2.length <= 1000
                0 <= arr1[i], arr2[i] <= 1000
                All the elements of arr2 are distinct.
                Each arr2[i] is in arr1.

     EDGE CASES:  - arr1 = [2, 3,4 , 5, 6, 6]  arr2 = [6, 4]
                            [6, 6, 4, 2, 3, 5]

    INITIAL APPROACH:  - Use a Hashmap for the count of each num in arr1
                        - output = []
                        - Iterate over arr2
                            - let dup = hashmap[arr2[i]]
                            - result.push(...Array(dup).fill(arr2[i])));
                         
                         - Iterate over arr1 
                                -IF (!arr1[i]) {
                                    result.push(arr1[i])
                                }

                        - return result;

                        Time:  O(n); 
                        Space:  O(n)
                    

 */
