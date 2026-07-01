// check if all numbers in our array imuliple of 10 or not 

let num = [10, 20, 30, 40 ];

let ans = num.every((el) => el%10 == 0);

console.log(ans);

// Create a function to find the min number in an array 

function getMin(num1) {
    let min = num1.reduce((min, el) => {
    if(min < el) {
        return min;
    } else {
        return el;
    }
   });

   return min;
}

let num1 = [10, 5, 20, 30];

// let min = num1.reduce((min, el) => {
//     if(min < el) {
//         return min;
//     } else {
//         return el;
//     }
// });

// console.log(min);