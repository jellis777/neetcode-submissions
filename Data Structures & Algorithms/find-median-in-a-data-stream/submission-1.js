class MedianFinder {
    constructor() {
        this.left = new MaxHeap(); // smaller half
        this.right = new MinHeap(); // larger half
    }

    addNum(num) {
        this.left.push(num);

        this.right.push(this.left.pop());

        if (this.right.size() > this.left.size()) {
            this.left.push(this.right.pop());
        }
    }

    findMedian() {
        if (this.left.size() > this.right.size()) {
            return this.left.peek();
        }

        return (this.left.peek() + this.right.peek()) / 2;
    }
}

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] >= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        let max = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let largest = i;

            if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
                largest = left;
            }

            if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
                largest = right;
            }

            if (largest === i) break;

            [this.heap[i], this.heap[largest]] = [this.heap[largest], this.heap[i]];
            i = largest;
        }

        return max;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        while (i > 0) {
            let parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] <= this.heap[i]) break;

            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        let min = this.heap[0];
        this.heap[0] = this.heap.pop();

        let i = 0;

        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }

            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest === i) break;

            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }

        return min;
    }

    peek() {
        return this.heap[0];
    }

    size() {
        return this.heap.length;
    }
}
