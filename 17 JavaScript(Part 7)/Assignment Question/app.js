// Question 1.
// Write an arrow function named arrayAverage that accepts an array of numbers and return the average of those numbers. 


// const arrayAvg = (arr) => {
//     let total = 0;

//     for(let number of arr){
//         total += number;
//     }

//     return total / arr.length;
// };

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arrayAvg(arr));


// Questin 2.
// Write an arrow function named isEven() that takes a single number as argument and returns if it is even or not


const isEven = (num) => num % 2 == 0;

// console.log(isEven(9));

// Question 3.
// What is the output of the following code: 

const object = {
    message: 'Hellow world ',
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);


// Question 4.
// What is the output of the following code: 

let length = 4;

function callback() {
    console.log(this.length);
}

const object2 = {
    length: 5,
    method(callback) {
        callback();
    },
};

object.method(callback, 1,2)