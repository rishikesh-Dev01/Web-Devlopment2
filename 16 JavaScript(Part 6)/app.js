
function hello() {
    console.log("hello");
}

// hello();

function printName() {
    console.log("Rishikesh");
    console.log("Pal")
}

// printName();

function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}

// print1to5();


function isAdult() {
    let age = prompt("Enter age : ");

    if(age >= 18) {
        console.log("You are Adult");
    } else if(age <= 10) {
        console.log("You are child ");
    } else {
        console.log("You are not Adult");
    }
}

// isAdult();

function printDiceRoll() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
}

// printDiceRoll();

/* Functions with Arguments */

function printInfo(name , age) {
    console.log(`${name}'s age is ${age}`);
}

// printInfo("Rishikesh", 23);
// printInfo("Rishi", 21);


// Pracetice question
// Create a function that gives us the avarage of 3 numbers. 

function calcAvg(a,b,c) {
    let avg = (a + b + c)/3;
    console.log(avg);
}

// calcAvg(12,14, 16)


function printTable(n) {
    for(let i=n; i<=n*10; i+=n) {
        console.log(i);
    }
}

printTable(3);