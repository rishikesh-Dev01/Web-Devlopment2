// Qs 1.>  square and sum the array element using the arrow function and then find the average of the array 

// let nums = [1, 2, 3, 4, 5];

// const square = nums.map((num) => num * num);
// console.log(square);

// let sum = square.reduce((acc, cur) => acc + cur, 0);

// let avg = sum / nums.length;

// console.log(avg);



// Qs 2.> create a new array using the map function whose each element is equal to the original element plus 5

// let numbers = [2, 4, 6, 9, -2, -4];

// console.log(numbers.map((number) => number + 5));



// Qs 3.> create a new array whose element are in uppercase of words present in the original array 

// let strings = ["adam", "bob", "catlan", "doland", "eve"];

// console.log(strings.map((string) => string.toUpperCase()));



// Qs 4.> Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The functions should return a new aray with the original array values and all of the additional arguments doubled 

// const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map ((v) => v*2),];

// doubleAndReturnArgs([1, 2, 3,], 4, 4); // [1,2, 3, 8, 8];
// doubleAndReturnArgs([2], 10, 4); // [2, 20, 8]



// Qs 5.> Write a function called mergeObject that accepts two objects and returns a new object which contains all the keys and values of the first object and second object 

const mergeObject = (obj1, obj2) => ({...obj1, ...obj2});

mergeObject({a:1, b:2}, {c:3, d: 4});