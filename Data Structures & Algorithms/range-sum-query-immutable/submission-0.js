class NumArray {
    /**
     * @param {number[]} nums
     */
    constructor(nums) {
        this.arr = [...nums]
    }

    /**
     * @param {number} left
     * @param {number} right
     * @return {number}
     */
    sumRange(left, right) {
        let sum = 0; 
        for (let i = left; i <= right; i++) {
            sum += this.arr[i]
        }

        return sum; 
    }
}

/**
 
 */
