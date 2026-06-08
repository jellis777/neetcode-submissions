class MyHashMap {
    constructor() {
        this.map = new Map()
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (!this.map.has(key)) {
            this.map.set(key, value)
        } else {
            this.map.set(key, value)
        }
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.map.has(key)) {
            return this.map.get(key)
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        if (this.map.has(key)) {
            this.map.delete(key)
        }
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
