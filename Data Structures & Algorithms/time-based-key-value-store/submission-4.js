class TimeMap {
    constructor() {
        this.store = {};
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (!this.store[key]) {
            this.store[key] = [];
        }

        this.store[key].push([timestamp, value]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (!this.store[key]) return "";

        const values = this.store[key];

        let left = 0;
        let right = values.length - 1;
        let result = "";

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            let currentTimestamp = values[mid][0];
            let currentValue = values[mid][1];

            if (currentTimestamp <= timestamp) {
                result = currentValue;
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result; 
    }
}
