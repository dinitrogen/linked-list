import { Node } from "./Node.js"

export class LinkedList {
    constructor() {
        this.head = new Node(null);
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head.value === null) {
            this.head = newNode;
            newNode.next = this.tail;            
        } else {
            let pointer = this.head;
            while (pointer !== null) { 
                if (pointer.next === null) {
                    pointer.next = newNode;
                    newNode.next = this.tail;
                 }
                 pointer = pointer.next;
            }
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if  (this.head.value === null) {
            this.head = newNode;
            newNode.next = this.tail;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    size() {
        let count = 0;
        let pointer = this.head;
        while (pointer) {
            if (pointer.value) {
                count++;
            }
            pointer = pointer.next;
        }
        return count;
    }

    getHead() {
        return this.head;
    }

    getTail() {
        let pointer = this.head;
        while (pointer) {
            if (pointer.next === this.tail) {
                return pointer;
            }
            pointer = pointer.next;
        }
    }

    at(index) {
        let pointer = this.head;
        for (let i = 0; i < index; i++) {
            if (pointer.next) {
                pointer = pointer.next
            } else { 
                return null;
            }
        }
        return pointer;
    }

    pop() {
        let pointer = this.head;
        while (pointer.next) {
            if (pointer.next.next === null) {
                pointer.next = this.tail;
                return;
            }
            pointer = pointer.next;
        }
    }

    contains(value) {
        let pointer = this.head;
        while (pointer) {
            if (pointer.value === value) {
                return true;
            }
            pointer = pointer.next;
        }
        return false;
    }

    find(value) {
        let index = 0;
        let pointer = this.head;
        while (pointer) {
            if (pointer.value === value) {
                return index;
            }
            pointer = pointer.next;
            index++;
        }
        return null;
    }

    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value)
        } else {
            const newNode = new Node(value);
            let pointer = this.head;
            for (let i = 1; i < index; i++) {
                pointer = pointer.next;
                if (pointer === null) return;
            }
            newNode.next = pointer.next;
            pointer.next = newNode;
        }
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
        } else {
            let pointer = this.head;
            for (let i = 1; i < index; i++) {
                pointer = pointer.next;
                if (pointer.next === null) return;
            }
            pointer.next = pointer.next.next;
        }
    }

    toString() {
        let pointer = this.head;
        let str = '';
        while (pointer) {
            str = str.concat(pointer.next === this.tail ? `( ${pointer.value} ) -> null` : `( ${pointer.value} ) -> `);
            pointer = pointer.next;
        }
        return str;
    }
}