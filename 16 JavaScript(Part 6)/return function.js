
function sum(a,b) {
    return a + b;

}

sum(sum(2,3), 4);
//  sum = (3 + 5);
// console.log(sum(3,5));
// console.log(sum(sum(2,3), 4));


function getSum(n) {
    let sum = 0;

    for(let i=1; i<=n; i++) {
        sum+=i;
    }

    return sum ; 
}

// console.log(getSum(4));



let str = ["hi", "hello", "bye", "!"];

function concat(str) {
    let result = "";

    for(let i=0; i<str.lenght; i++) {
        result+=str[i];
    }

    return result;
}


// Pracetice Question 

let greet = "hello"; // Global Scop

function changeGreet() { 
    let greet = "Namaste"; // Function Scop
    console.log(greet);

    function innerGreet() { 
        console.log(greet); // Lexical Scop
    }

    innerGreet();
}

// console.log(greet);
// changeGreet();

/* Higher Order Function */

function multipleGreet(func, count) {
    for(let i=1; i<=count; i++) {
        func();
    }
}

let higer = function() {
    console.log("hello");
}

// multipleGreet(higer, 3);


function oddEvenTest(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    } else if ( request == "Even") {
        return function(n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("wrong request");
    }
}

// let request = "odd" ; // even;

/* Mathod */

const calculator = {
    add : function(a,b) {
        return a + b;
    },
    sub : function(a,b) {
        return a - b;
    },
    mult : function(a,b) {
        return a * b;
    }
};
