class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortedSquares(nums) {
        let l = 0;
        let r = nums.length - 1;
        let pos = nums.length - 1;
        const result = new Array(nums.length);

        while (l <= r) {
            const leftSquare = nums[l] * nums[l];
            const rightSquare = nums[r] * nums[r];

            if (leftSquare > rightSquare) {
                result[pos] = leftSquare;
                l++;
            } else {
                result[pos] = rightSquare;
                r--;
            }

            pos--;
        }

        return result;
    }
}

/**
 INPUT: []int -> nums  (ascending order)

 OUTPUT: []INT -> SQUARE OF NUMS (ascending order)

  CONSTRAINTS:   Time: O(n)
                 -10,000 <= nums[i] <= 10,000
                 1 <= nums.length <= 10,000
                 nums is sorted (ascending order)

  EDGE CASES: [-8, -4, -3]  -> [9, 16, 64]
              [4, 6, 7, 9]  -> [16, 36, 49, 81]

  INITIAL APPROACH:    let l = 0;
                        let r = 0
                        let result = []
                        let rightSquare = nums[r] * nums[r];
                        let leftSquare = nums[l] * nums[l]
                        
                            - while (nums[r] < 0 && r < nums.length) {
                                l++; 
                                r++; 
                            }

                            -   if (r > nums.length) {
                                    while (l >= 0) {
                                    result.push(leftSquare)
                                    l--; 
                                    }
                            }  
                            - ELSE IF (l === 0) 
                                    while (r < nums.length)
                                    result.push(rightSquare) 
                                    r++
                            -  

                            while (l >= 0 && r < nums.length)
                            IF (rightSquare === leftSquare) {
                                result.push(rightSquare)
                                result.push(leftSquare)
                                r++; 
                                l--; 
                            } ELSE IF (rightSquare < leftSquare) {
                                result.push(rightSquare)
                                r++;
                            } Else {
                                result.push(leftSquare){
                                l--
                                }
                            }

                            while (r < nums.length) {
                                result.push(rightSquare)
                                r++
                            }

                            while (l >= 0) {
                            result.push(leftSquare);
                            l--;
                            }

                            return result; 
                            
                            


 */
