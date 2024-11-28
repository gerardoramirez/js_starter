/**
 * 
 * These methods provide powerful, declarative ways to manipulate arrays without needing traditional loops.
 * 
 * map() processes each element and returns a new array, great for transformations.
 * filter() creates a subset of the array based on a condition, useful for eliminating unwanted elements.
 * reduce() combines all elements into a single value, making it ideal for tasks like summation or building objects.
 * 
 * These methods allow for cleaner, more expressive code compared to manually iterating over arrays.
 * 
 */


const numbers = [1, 2, 3, 4];

// Transform each element with map
const doubled = numbers.map(num => num * 2); // [2, 4, 6, 8]

// Filter elements based on a condition
const evens = numbers.filter(num => num % 2 === 0); // [2, 4]

// Aggregate values with reduce
const sum = numbers.reduce((acc, num) => acc + num, 0); // 10