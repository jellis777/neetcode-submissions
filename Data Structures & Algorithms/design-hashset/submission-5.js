class MyHashSet {
    constructor() {
        this.size = 1000;
        this.buckets = Array.from({length: this.size}, () => [])
    }

    hash(key) {
        return  key % this.size;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
       const index = this.hash(key);

       if (!this.buckets[index].includes(key)) {
        this.buckets[index].push(key);
       }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        const index = this.hash(key);

        this.buckets[index] = this.buckets[index].filter(
            num => num !== key
        )
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        const index = this.hash(key); 

        return this.buckets[index].includes(key); 
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
