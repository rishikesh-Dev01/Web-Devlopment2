
// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;

// for(let i=0; i<=arr.length; i++) {
//     if(arr[i] == num) {
//         arr.splice(i,1);
//     }
// }

// console.log(arr);

// Question 2.

// let number = 287152;
// let count = 0;
// let copy = number;

// while(copy > 0){
//     count++;
//     copy = Math.floor(copy/10);
// }

// console.log(count);


// Question 3.

// let num = 287152;
// let sum = 0;
// let copy = num;

// while(copy > 0) {
//     digit = copy % 10;
//     sum+=digit;
//     copy = Math.floor(copy/10);
// }

// console.log(sum);

// Print the factorial of anumber n.

let num = 5;
let fact = 1;

for(let i=1; i<=num; i++) {
    fact *= i;
}
console.log(fact);

// Question 5.
//Find the largest number in an array with only positive numbers.

let arr = [2, 5, 10, 4, 2, 7, 1, 9];
let largest = 0;

for(let i=0; i<arr.length; i++) {
    if(largest < arr[i]) {
        largest = arr[i];
    }
}

console.log(largest);