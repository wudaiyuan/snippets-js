let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ES6 iterator
let iterator = numbers[Symbol.iterator]();
iterator.next(); // => { value: 0, done: false }

let entries = numbers.entries();
entries.next(); // => { value: [ 0, 0 ], done: false }

let copy1 = Array.from(numbers);
copy1.fill(1.1, 0, 11); // => [ 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1, 1.1 ]

let copy2 = Array.of(...numbers);
copy2.copyWithin(0, 9, 11); // => [ 9, 10, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

numbers.sort((a, b) => a - b); // => 0 ~ 10

numbers.includes(1); // => true
numbers.includes(1, 2); // => false

// Typed Array
let int8 = new Int8Array();
