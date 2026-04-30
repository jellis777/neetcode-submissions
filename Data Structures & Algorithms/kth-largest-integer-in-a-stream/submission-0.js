class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.heap = [];

        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        // 1. Add new value
        this.heap.push(val);

        // 2. Keep heap size = k
        if (this.heap.length > this.k) {
            this.heap.sort((a,b) => a - b); // simulate min heap
            this.heap.shift(); // remove smallest
        }

        // 3. Ensure smallest is at index 0
        this.heap.sort((a, b) => a - b); 

        return this.heap[0]; 
    }
}
